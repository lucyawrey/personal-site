import { makeAutoObservable } from "mobx"
import Text from "../content/text.json";
import { isClient } from "../utilities/state";

export class TerminalModel {
    public input: string = "";

    public lines: string[] = [Text.terminalStart];

    private inputCache: string = "";
    private cached: boolean = false;

    private history: string[] = [];
    private historyIter: number = 0;

    private debug() {
        console.clear();
        console.log(`input: ${this.input}\ninputCache: ${this.inputCache}\ncached: ${this.cached}\ncommandLength: ${this.history.length}\ncommandIter: ${this.historyIter}\n`);
    }

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
        this.history.push(this.input);
        this.pushLine("> " + this.input);
        this.setInput("");
        this.historyIter = this.history.length;

        this.sessionSave(this.history);

        this.debug();
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

        this.debug();
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

    public pushCommand(newline: string) {
        this.history.push(newline);
        this.resetIter();
    }

    public pushLine(newline: string) {
        this.lines.push(newline);
    }

    private sessionSave(history: string[]) {
        const json = JSON.stringify(history);
        sessionStorage.setItem(Text.sessionStorageKey, json)
    }

    private sessionLoad(): string[] {
        let json = sessionStorage.getItem(Text.sessionStorageKey);
        if (json) {
            this.history = JSON.parse(json);
            this.resetIter();
        }
        return [];
    }
}
