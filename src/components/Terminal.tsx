import { observer } from "mobx-react-lite";
import { TerminalModel } from "models/TerminalModel";
import { ChangeEvent, useRef } from "react";

interface TerminalProps {
  terminal: TerminalModel;
}

const Terminal = observer(({ terminal }: TerminalProps) => {
  const terminalRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const items: JSX.Element[] = [];

  let i = 1;
  for (let line of terminal.lines) {
    let addClass = "";
    const match = line.match(/^\[([_a-zA-Z]+[_a-zA-Z0-9-\s]*?)\]/);
    if (match) {
      line = line.substring(match[0].length);
      addClass = " " + match[1];
    }
    items.push(
      <span className={"block whitespace-pre-wrap" + addClass} key={i}>
        {line || "\n"}
      </span>
    );
    i++;
  }

  function focus() {
    if (inputRef.current) {
      inputRef.current.focus();
      cursorEnd();
    }
  }

  function scrollBottom() {
    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }, 10);
    }
  }

  function cursorEnd() {
    if (terminal.input && inputRef.current) {
      setTimeout(() => {
        inputRef.current.selectionStart = terminal.input.length;
        inputRef.current.selectionEnd = terminal.input.length;
      }, 10);
    }
  }

  function change(event: ChangeEvent<HTMLInputElement>) {
    terminal.setInput(event.target.value);
    terminal.resetIter();
  }

  function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key.toLowerCase()) {
      case "enter":
        terminal.submit();
        scrollBottom();
        break;
      case "arrowup":
        event.preventDefault();
        terminal.historyBack();
        break;
      case "arrowdown":
        event.preventDefault();
        terminal.historyForward();
        break;
      case "c":
        if (event.ctrlKey) {
          event.preventDefault();
          terminal.quitGame();
        }
        break;
      default:
        return;
    }
  }

  return (
    <div
      className="terminal-scroll overflow-y-auto overflow-x-hidden rounded-xl border-solid leading-tight border-gray-400
        p-2 w-full h-[28rem] bg-black text-white font-mono md:text-lg  border-t-[24px]"
      ref={terminalRef}
      onClick={focus}
    >
      <div>{items}</div>

      <span>
        &gt;&nbsp;
        <input
          className="bg-black w-[90%] border-none m-0 p-0 outline-none"
          ref={inputRef}
          type="text"
          value={terminal.input}
          onChange={change}
          onKeyDown={keyDown}
          autoCorrect="off"
          autoCapitalize="off"
        />
      </span>
    </div>
  );
});

export default Terminal;
