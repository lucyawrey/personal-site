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

export function trimQuotes(text: string): string {
  var start = 0,
    end = text.length;
  while (start < end && /["'`]/.test(text[start])) ++start;
  while (end > start && /["'`]/.test(text[end - 1])) --end;
  return start > 0 || end < text.length ? text.substring(start, end) : text;
}
