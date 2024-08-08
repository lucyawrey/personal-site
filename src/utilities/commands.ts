import { TerminalModel } from "../models/TerminalModel";
import Text from "../content/text.json";
import { jump } from "./helpers";

function help(args: string[], terminal: TerminalModel) {
  terminal.print(Text.helpCommand);
}

function go(args: string[], terminal: TerminalModel) {
  jump(args[0].toLowerCase());
}

function clear(args: string[], terminal: TerminalModel) {
  terminal.clear();
}

const Commands: any = { help, go, clear };
export default Commands;
