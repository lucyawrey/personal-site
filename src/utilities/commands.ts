import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
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

function get(args: string[], terminal: TerminalModel) {
  if (args[0] && args[0] === "resume") {
    if (isClient()) {
      let a = document.createElement("a");
      a.href = Text.files.resume;
      a.click();
    }
  } else {
    terminal.print(Text.errorGetArgument);
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
  terminal.startGame();
}

function email(args: string[], terminal: TerminalModel) {
  if (args[0] && (args[0] === "show" || args[0] === "send")) {
    let option = args[0];
    if (option === "show") {
      terminal.print(Text.email);
    } else if (option === "send") {
      if (isClient()) {
        let a = document.createElement("a");
        a.href = `mailto:${Text.email}`;
        a.click();
      }
    }
  } else {
    terminal.print(Text.errorEmailArgument);
  }
}

function cute(args: string[], terminal: TerminalModel) {
  terminal.print(Text.cute);
}

const Commands: any = { help, link, get, go, clear, game, email, cute };
export default Commands;
