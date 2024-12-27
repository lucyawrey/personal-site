import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import GameText from "content/game_text.json";
import { jump } from "utilities/helpers";

function help(args: string[], terminal: TerminalModel) {
  terminal.print(Text.helpCommand);
}

function go(args: string[], terminal: TerminalModel) {
  jump(args[0].toLowerCase());
}

function clear(args: string[], terminal: TerminalModel) {
  terminal.clear();
}

function game(args: string[], terminal: TerminalModel) {
  terminal.program = "game";
  terminal.print(GameText.start);
}

function cute(args: string[], terminal: TerminalModel) {
  terminal.print(Text.cute);
}

const Commands: any = { help, go, clear, game, cute };
export default Commands;
