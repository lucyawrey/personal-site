import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import GameScript from "content/game-script.txt";
import { isClient, jump } from "utilities/helpers";

function help(args: string[], terminal: TerminalModel) {
  terminal.print(Text.helpCommand);
}

function link(args: string[], terminal: TerminalModel) {
  if (args[0] && (args[0] === "linkedin" || args[0] === "github")) {
    const link = Text.links[args[0]];
    if (isClient()) {
      window.open(link, "_blank")?.focus();
    }
  } else {
    terminal.print(Text.errorLinkArgument);
  }
}

function go(args: string[], terminal: TerminalModel) {
  if (args[0]) {
    jump(args[0].toLowerCase());
  } else {
    terminal.print(Text.errorGoArgument);
  }
}

function clear(args: string[], terminal: TerminalModel) {
  terminal.clear();
}

function game(args: string[], terminal: TerminalModel) {
  terminal.program = "game";
  terminal.print(GameScript);
}

function cute(args: string[], terminal: TerminalModel) {
  terminal.print(Text.cute);
}

const Commands: any = { help, link, go, clear, game, cute };
export default Commands;
