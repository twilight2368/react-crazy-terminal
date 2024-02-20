import { useEffect, useRef, useState } from "react";
import "./style/style.css";
export default function InputCommand(props) {
  const [command, setCommand] = useState("");
  const [position, setPosition] = useState(0);
  const [blink, setBlink] = useState(true);
  const [highlight, setHighlight] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const input_command = useRef(null);

  function focusInput() {
    input_command.current.focus();
    setHighlight(false);
    //console.log("hi");
  }

  useEffect(() => {
    document.getElementById("terminal").addEventListener("click", focusInput);

    return () => {
      document
        .getElementById("terminal")
        .removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <>
      <div className="command-line">
        <span className={highlight ? "highlighted-command" : ""}>
          {command.length > 0 ? (
            <>
              <span>{command.slice(0, position)}</span>
              <span
                className={blink ? "cursor-animation" : "cursor-no-animation"}
              >
                {position === command.length ? (
                  <>&nbsp;</>
                ) : (
                  <>{command[position]}</>
                )}
              </span>
              <span>{command.slice(position + 1, command.length)}</span>
            </>
          ) : (
            <>
              <span
                className={blink ? "cursor-animation" : "cursor-no-animation"}
              >
                &nbsp;
              </span>
            </>
          )}
        </span>
        <form
          className="command-text-input"
          onSubmit={(e) => {
            e.preventDefault();
            setCommand("");
          }}
        >
          <input
            type="text"
            ref={input_command}
            value={command}
            onChange={(e) => {
              const input_command = e.target.value;
              setCommand(input_command);
            }}
            onKeyUp={(e) => {
              setBlink(true);
            }}
            autoFocus={true}
            onKeyDown={(e) => {
              if ((e.metaKey === true || e.ctrlKey === true) && e.key === "a") {
                setHighlight(true);
                setSelectAll(true);
              } else {
                setHighlight(false);
                if (e.key.length === 1 && e.ctrlKey === false) {
                  if (!selectAll) {
                    // console.log("Character added:", e.key);
                    setBlink(false);
                    setPosition(position + 1);
                  } else {
                    setBlink(false);
                    setPosition(1);
                    setSelectAll(false);
                  }
                }

                if (e.key === "v" && e.ctrlKey === true) {
                  setPosition(command.length);
                }

                if (e.key === "Backspace") {
                  if (!selectAll) {
                    if (position > 0) {
                      //console.log(position);
                      setBlink(false);
                      setPosition(position - 1);
                    }
                  } else {
                    setPosition(0);
                    setSelectAll(false)
                  }
                }

                if (e.code === "ArrowLeft") {
                  if (position > 0) {
                    //console.log(position);
                    setBlink(false);
                    setPosition(position - 1);
                  }
                } else if (e.code === "ArrowRight") {
                  if (position < command.length) {
                    //console.log(position);
                    setBlink(false);
                    setPosition(position + 1);
                  }
                }
              }
            }}
          />
        </form>
      </div>
    </>
  );
}
