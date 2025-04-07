import Text from "content/text.json";
import GameScript from "content/game-script.txt";
import { isClient, trimQuotes } from "utilities/helpers";
import { TerminalModel } from "./TerminalModel";

export class GameModel {
  public readonly script: string[] = (GameScript as string).split("\n");

  public scriptPosition: number = 0;
  public playerName: string = "";

  constructor() {
    if (isClient()) {
      this.gameLoad();
    }
  }

  public loop(terminal: TerminalModel) {
    console.log("\n\nSTART!");
    while (true) {
      if (this.scriptPosition >= this.script.length) {
        this.end(terminal);
        break;
      }
      const line = this.script[this.scriptPosition].trim();
      const match = line.match(/(?:[^\s"]+|"[^"]*")+/g);

      console.log(match);
      if (match) {
        let cmd = match[0];
        if (cmd === "jump") {
          this.scriptPosition = parseInt(cmd) - 1;
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
          let text = trimQuotes(match[1]);
          if (match[2]) {
            text = "[" + trimQuotes(match[2]) + "]" + text;
          }
          terminal.print(text);
        } else if (cmd.startsWith('"')) {
          let text = trimQuotes(cmd);
          if (match[1]) {
            text = "[" + trimQuotes(match[1]) + "]" + text;
          }
          terminal.print(text);
        } else {
          terminal.print(`[text-red-500]Error, invalid script command: ${match[0]}.`);
        }
      }

      this.scriptPosition++;
      this.gameSave();
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

  private gameSave() {
    const json = JSON.stringify({
      scriptPosition: this.scriptPosition,
      playerName: this.playerName,
    });
    localStorage.setItem(Text.gameDataStorageKey, json);
  }

  private gameLoad() {
    const json = localStorage.getItem(Text.gameDataStorageKey);
    if (json) {
      const data = JSON.parse(json);
      this.scriptPosition = data.scriptPosition;
      this.playerName = data.playerName;
    }
  }
}
