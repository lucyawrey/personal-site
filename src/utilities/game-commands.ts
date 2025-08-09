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

function restart(args: string[], terminal: TerminalModel) {
  terminal.getGame().restart(terminal, true);
}

function hint(args: string[], terminal: TerminalModel) {
  terminal.print(Text.notImplemented);
}

const Commands: any = { help, clear, quit, restart, hint };
export default Commands;
