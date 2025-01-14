import Text from "content/text.json";
import GameScript from "content/game-script.txt";
import { isClient } from "utilities/helpers";
import { TerminalModel } from "./TerminalModel";

const scriptRegex = /(?<cmd>[^"^\s]+)\s*|"(?<str>[^"]+)"\s*/g;

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
      if (!line) {
        console.log(`NO LINE: ${this.scriptPosition}`);
        break;
      }
      const matches = scriptRegex.exec(line);
      if (matches) {
        const cmd = matches[0];
        matches.splice(0, 1);
        console.log(`CMD: ${cmd}\n`, matches);
        if (!cmd) {
          terminal.print(matches[1]);
        } else if (cmd === "jump") {
          this.scriptPosition = parseInt(matches[0]) - 1;
        } else if (cmd === "wait") {
          this.scriptPosition++;
          break;
        } else if (cmd === "end") {
          this.end(terminal);
          break;
        } else {
          terminal.print(matches[1]);
          //terminal.print(`[text-red-500]Error, invalid script command: ${cmd}.`);
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
