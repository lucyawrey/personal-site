import { TerminalModel } from "../models/TerminalModel";

function help(args: string[], terminal: TerminalModel) {
    terminal.print("Help Test!");
}

const Commands: any = { help };
export default Commands;
