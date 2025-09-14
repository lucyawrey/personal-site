import Text from "content/text.json";
import StoryContent from "content/awakening_quest.ink";
import { isClient, trimQuotes } from "utilities/helpers";
import { TerminalModel } from "./TerminalModel";
import { Compiler, Story } from "inkjs/compiler/Compiler";

export class GameModel {
  public story: Story = new Compiler(StoryContent).Compile();

  constructor() {
    if (isClient()) {
      this.gameLoad();
    }
  }

  public loop(terminal: TerminalModel, choice: number | undefined = undefined) {
    if (choice !== undefined) {
      const choiceCount = this.story.currentChoices.length;
      if (choiceCount === 1) {
        this.story.ChooseChoiceIndex(0);
        this.story.Continue();
        terminal.print("");
      }
      if (choice > -1 && choice < choiceCount) {
        this.story.ChooseChoiceIndex(choice);
        this.story.Continue();
        terminal.print("");
      }
    }
    while (this.story.canContinue) {
      let current_text = this.story.Continue();
      if (current_text === null) {
        break;
      }
      if (this.story.currentTags && this.story.currentTags.length > 0) {
        const classNames = this.story.currentTags.join(" ");
        current_text = `[${classNames}]${current_text}`;
      }
      terminal.print(current_text + "\n");
    }
    if (this.story.currentChoices.length > 0) {
      if ((this.story.currentChoices.length = 1)) {
        terminal.print(`Press Enter to ${this.story.currentChoices[0].text}.`);
      } else {
        this.story.currentChoices.forEach((choice, i) => {
          terminal.print(`${i + 1}. ${choice.text}`);
        });
      }
    } else {
      this.end(terminal);
    }
    this.gameSave();
  }

  public restart(terminal: TerminalModel, resume: boolean = false) {
    this.story.ResetState();
    if (resume) {
      this.loop(terminal);
    }
  }

  public end(terminal: TerminalModel) {
    this.restart(terminal);
    this.gameSave();
    terminal.quitGame();
  }

  private gameSave() {
    const json = this.story.state.ToJson();
    localStorage.setItem(Text.gameDataStorageKey, json);
  }

  private gameLoad() {
    const json = localStorage.getItem(Text.gameDataStorageKey);
    if (json) {
      this.story.state.LoadJson(json);
    }
  }
}
