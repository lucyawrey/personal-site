import { observer } from "mobx-react-lite";
import { TerminalModel } from "../models/TerminalModel";
import { ChangeEvent, useRef } from "react";

interface TerminalProps {
  model: TerminalModel;
}

const Terminal = observer(({ model }: TerminalProps) => {
  const terminalRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const items: JSX.Element[] = [];

  let i = 1;
  for (let line of model.lines) {
    let mod = "";
    if (line.startsWith("[red]")) {
      line = line.replace("[red]", "");
      mod = " text-red-500";
    }

    items.push(
      <span className={"block whitespace-pre-wrap" + mod} key={i}>
        {line}
      </span>,
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
    if (model.input && inputRef.current) {
      setTimeout(() => {
        inputRef.current.selectionStart = model.input.length;
        inputRef.current.selectionEnd = model.input.length;
      }, 10);
    }
  }

  function change(event: ChangeEvent<HTMLInputElement>) {
    model.setInput(event.target.value);
    model.resetIter();
  }

  function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "Enter":
        model.submit();
        scrollBottom();
        break;
      case "ArrowUp":
        event.preventDefault();
        model.historyBack();
        break;
      case "ArrowDown":
        event.preventDefault();
        model.historyForward();
        break;
      default:
        return;
    }
  }

  return (
    <div
      className="terminal-scroll overflow-y-auto overflow-x-hidden rounded-xl border-solid leading-tight border-gray-400
        p-2 w-full h-96 bg-black text-white font-mono md:text-lg  border-t-[24px]"
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
          value={model.input}
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
