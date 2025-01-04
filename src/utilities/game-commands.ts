import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";

function help(args: string[], terminal: TerminalModel) {
  terminal.print(Text.game.helpCommand);
}

function clear(args: string[], terminal: TerminalModel) {
  terminal.clear();
}

function quit(args: string[], terminal: TerminalModel) {
  terminal.quitGame();
}

const Commands: any = { help, clear, quit };
export default Commands;
