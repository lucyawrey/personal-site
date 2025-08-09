import { TerminalModel } from "models/TerminalModel";
import Commands from "utilities/commands";
import GameCommands from "utilities/game-commands";
import Text from "content/text.json";

export default function run(line: string, terminal: TerminalModel) {
  const args = line.toLowerCase().split(/\s+/);
  const cmd = args[0];
  args.splice(0, 1);
  if (terminal.program === "root") {
    try {
      Commands[cmd](args, terminal);
    } catch {
      terminal.print(Text.errorNotFound, cmd);
    }
  } else if (terminal.program === "game") {
    try {
      GameCommands[cmd](args, terminal);
    } catch {
      terminal.print(Text.game.gameNoAction, cmd);
    }
  }
}
