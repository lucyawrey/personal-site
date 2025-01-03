import { makeAutoObservable } from "mobx";
import Text from "content/text.json";
import run from "utilities/run";
import { format, isClient } from "utilities/helpers";

export class TerminalModel {
  public input: string = "";

  public lines: string[] = [Text.terminalStart];

  public program: "root" | "game" = "root";

  private inputCache: string = "";
  private cached: boolean = false;

  private history: string[] = [];
  private historyIter: number = 0;

  constructor() {
    if (isClient()) {
      this.sessionLoad();
    }

    makeAutoObservable(this);
  }

  public resetIter() {
    this.historyIter = this.history.length;
  }

  public submit() {
    if (this.input) {
      const cleaned = this.input.trim();
      this.historyPush(cleaned);
      this.print("> " + cleaned);
      run(cleaned, this);
    } else {
      this.print(">");
    }
    this.setInput("");

    this.sessionSave(this.history);
  }

  public historyBack() {
    if (this.history.length == 0) {
      return;
    }

    if (!this.cached) {
      this.inputCache = this.input;
      this.cached = true;
    }

    if (this.historyIter != 0) {
      this.historyIter--;
    }
    this.setInput(this.history[this.historyIter]);
  }

  public historyForward() {
    if (this.historyIter < this.history.length - 1) {
      this.historyIter++;
      this.setInput(this.history[this.historyIter]);
    } else if (this.historyIter < this.history.length) {
      this.historyIter++;
      this.setInput(this.inputCache);
      this.inputCache = "";
      this.cached = false;
    }
  }

  public setInput(input: string) {
    this.input = input;
  }

  public print(newline: string, ...args: any[]) {
    if (args.length > 0) {
      newline = format(newline, args);
    }
    this.lines.push(newline);
  }

  public error(message: string, ...args: any[]) {
    this.print("[red]" + message, args);
  }

  public clear() {
    this.lines = [];
  }

  private historyPush(newline: string) {
    const loc = this.history.indexOf(newline);
    if (loc != -1) {
      this.history.splice(loc, 1);
    }

    this.history.push(newline);
    this.resetIter();
  }

  private sessionSave(history: string[]) {
    const json = JSON.stringify(history);
    sessionStorage.setItem(Text.sessionStorageKey, json);
  }

  private sessionLoad(): string[] {
    const json = sessionStorage.getItem(Text.sessionStorageKey);
    if (json) {
      this.history = JSON.parse(json);
      this.resetIter();
    }
    return [];
  }
}
