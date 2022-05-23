import { observer } from "mobx-react-lite";
import { TerminalModel } from "../models/TerminalModel";
import { ChangeEvent, useRef, useState } from "react";

interface TerminalProps {
    model: TerminalModel;
}

const Terminal = observer(({ model }: TerminalProps) => {
    const inputRef = useRef<any>(null);

    const items: JSX.Element[] = [];

    let i = 0;
    for (let line of model.lines) {
        items.push(<><span key={i}>{line}</span><br /></>);
        i++;
    }

    function focus() {
        if (inputRef.current) {
            inputRef.current.focus();
            cursorEnd();
        }
    }

    function cursorEnd() {
        if (inputRef.current) {
            inputRef.current.selectionStart = model.input.length;
            inputRef.current.selectionEnd = model.input.length;
        }
    }

    function change(event: ChangeEvent<HTMLInputElement>) {
        model.setInput(event.target.value)
        model.resetIter();
    }

    function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case "Enter":
                model.submit();
                break;
            case "ArrowUp":
                model.history();
                cursorEnd();
                break;
            default:
                return;
        }
    }

    return (
        <div className="overflow-y-auto rounded-xl border-solid border-t-[24px] border-gray-400 p-2 w-full h-96 bg-black text-white font-mono text-xl" onClick={focus}>
            {items}

            <span>
                &gt;&nbsp;
                <input className="bg-black w-11/12 border-none m-0 p-0 outline-none" ref={inputRef} type="text" value={model.input} onChange={change} onKeyDown={keyDown}></input>
            </span>
        </div>
    );
});

export default Terminal;
