import Text from "content/text.json";
import GameScript from "content/game-script.txt";
import { isClient, trimQuotes } from "utilities/helpers";
import { TerminalModel } from "./TerminalModel";

export class GameModel {
  public readonly script: string[] = (GameScript as string).split("\n");

  public scriptPosition: number = 0;
  public playerName: string = "";
  public data: any = {};

  constructor() {
    if (isClient()) {
      this.gameLoad();
    }
  }

  /// TODO much better script processing logic
  public loop(terminal: TerminalModel) {
    while (true) {
      if (this.scriptPosition >= this.script.length) {
        this.end(terminal);
        break;
      }
      let line = this.script[this.scriptPosition].trim();
      // Replace variables
      line = line.replace(/\[\s*([a-zA-Z0-9_+]+)\s*\]/g, (match) => {
        match = match.replace(/[\[\]\s]*/g, "");
        let value = this.data[match];
        if (value) {
          return value.toString();
        } else {
          return `[Invalid Variable: ${match}]`;
        }
      });
      // Match tokens
      const match = line.match(/(?:[^\s"]+|"[^"]*")+/g);
      console.log(match);
      if (match) {
        let cmd = match[0];
        if (cmd === "jump") {
          this.scriptPosition = parseInt(match[1]) - 1;
        }
        if (cmd === "set") {
          this.data[match[1]] = match[2];
        } else if (cmd === "wait") {
          this.scriptPosition++;
          break;
        } else if (cmd === "end") {
          this.end(terminal);
          break;
        } else if (cmd === "choice") {
          for (let i = 0; ; i += 2) {
            if (match[1 + i] && match[2 + i]) {
              let option = trimQuotes(match[1 + i]);
              terminal.print(`  ${(i + 2) / 2}) ${option}`);
              //todo jump to logic
            } else {
              break;
            }
          }
        } else if (cmd === "print") {
          this.print(terminal, match[1], match[2]);
        } else if (cmd.startsWith('"')) {
          this.print(terminal, cmd, match[1]);
        } else {
          terminal.print(`[text-red-500]Error, invalid script command: ${match[0]}.`);
        }
      }

      this.scriptPosition++;
    }
  }

  public restart(terminal: TerminalModel, resume: boolean = false) {
    this.scriptPosition = 0;
    if (resume) {
      this.loop(terminal);
    }
  }

  public end(terminal: TerminalModel) {
    this.restart(terminal);
    this.gameSave();
    terminal.quitGame();
  }

  private print(terminal: TerminalModel, text: string, classNames: string) {
    text = trimQuotes(text);
    if (classNames) {
      text = "[" + trimQuotes(classNames) + "]" + text;
    }
    terminal.print(text);
    this.gameSave();
  }

  private gameSave() {
    const json = JSON.stringify({
      data: this.data,
      scriptPosition: this.scriptPosition,
      playerName: this.playerName,
    });
    localStorage.setItem(Text.gameDataStorageKey, json);
  }

  private gameLoad() {
    const json = localStorage.getItem(Text.gameDataStorageKey);
    if (json) {
      const data = JSON.parse(json);
      this.data = data.data;
      this.scriptPosition = data.scriptPosition;
      this.playerName = data.playerName;
    }
  }
}
