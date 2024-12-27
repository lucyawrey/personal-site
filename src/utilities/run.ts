import { TerminalModel } from "models/TerminalModel";
import Commands from "utilities/commands";
import Text from "content/text.json";

export default function run(line: string, terminal: TerminalModel) {
  const args = line.toLowerCase().split(" ");
  const cmd = args[0];
  args.splice(0, 1);
  if (terminal.program === "root") {
    try {
      Commands[cmd](args, terminal);
    } catch {
      terminal.error(Text.errorNotFound, cmd);
    }
  }
}
