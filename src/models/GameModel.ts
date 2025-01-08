import Text from "content/text.json";
import GameScript from "content/game-script.txt";
import { isClient } from "utilities/helpers";
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
    while (true) {
      if (this.scriptPosition >= this.script.length) {
        this.end(terminal);
        break;
      }

      const line = this.script[this.scriptPosition];

      const trim = line.trim();
      if (trim.startsWith("$")) {
        const args = trim.substring(1).trimStart().toLowerCase().split(/\s+/);
        const cmd = args[0];
        args.splice(0, 1);
        if (cmd === "jump") {
          this.scriptPosition = parseInt(args[0]) - 1;
        } else if (cmd === "wait") {
          this.scriptPosition++;
          break;
        } else if (cmd === "end") {
          this.end(terminal);
          break;
        } else {
          terminal.print(`[text-red-500]Error, invalid script command: ${cmd}.`);
        }
      } else {
        terminal.print(line);
      }

      this.scriptPosition++;
      this.gameSave();
    }
  }

  public end(terminal: TerminalModel) {
    this.scriptPosition = 0;
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
