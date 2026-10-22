import StoryContent from "content/awakening_quest.ink";
import { TerminalModel } from "./TerminalModel";
import { Compiler, Story } from "inkjs/compiler/Compiler";

export class GameModel {
  public story: Story = new Compiler(StoryContent).Compile();

  public loop(terminal: TerminalModel, choice: number | undefined = undefined) {
    if (this.story.currentChoices.length === 1) {
      this.story.ChooseChoiceIndex(0);
      this.story.Continue();
      terminal.print("");
    }
    if (choice !== undefined && choice > 0 && choice <= this.story.currentChoices.length) {
      this.story.ChooseChoiceIndex(choice - 1);
      this.story.Continue();
      terminal.print("");
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
      if (this.story.currentChoices.length === 1) {
        terminal.print(`[text-gray-400]${this.story.currentChoices[0].text}`);
      } else {
        this.story.currentChoices.forEach((choice, i) => {
          terminal.print(`${i + 1}. ${choice.text}`);
        });
      }
    } else {
      this.end(terminal);
    }
  }

  public restart(terminal: TerminalModel, resume: boolean = false) {
    this.story.ResetState();
    if (resume) {
      this.loop(terminal);
    }
  }

  public end(terminal: TerminalModel) {
    this.restart(terminal);
    terminal.quitGame();
  }
}
