import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";

export function isClient() {
  return typeof window !== "undefined";
}

export function format(text: string, ...args: any[]) {
  for (const arg of args) {
    text = text.replace("{}", arg);
  }
  return text;
}

export function jump(header: string) {
  const url = location.href;
  location.href = "#" + header;
}

export function quitGame(terminal: TerminalModel) {
  terminal.program = "root";
  terminal.print(Text.game.end);
}
