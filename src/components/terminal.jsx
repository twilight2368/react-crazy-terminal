import { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import InputCommand from "./input";
import "./style/style.css";
import Banner from "./banner";
import DisplayCommand from "./command";
import ResultCommand from "./result";

export default function Terminal(props) {
  const [firstrender, setFirstRender] = useState(true);
  const [history, setHistory] = useState([]);
  const [commands, setCommands] = useState([]);
  const [passInput, setPassInput] = useState(false);

  function addCommand(command) {
    if (command.length > 0) {
      setHistory((prevCommands) => [...prevCommands, command.toLowerCase()]);
    }
    if (command.toLowerCase() === "sudo") {
      setPassInput(true);
    }
    setCommands((prevCommands) => [...prevCommands, command.toLowerCase()]);
  }

  useEffect(() => {
    console.log(
      "%cYOU HACKED MY PASSWORD!😡",
      "color:lightgreen; font-size:40px "
    );
    console.log(
      "%cPassword: 'twilight' - I wonder what it does?🤔",
      "color:gray; font-size:10px "
    );
  }, []);

  function showInput(params) {
    setPassInput(false);
  }

  return (
    <>
      <ScrollToBottom className="ROOT_CSS">
        <div className="terminal">
          {firstrender ? <Banner /> : <></>}
          <div className="command-area">
            {commands.map((e) => {
              if (e === "clear") {
                setFirstRender(false);
                setCommands([]);
              } else {
                return (
                  <>
                    <DisplayCommand command={e} />
                    <ResultCommand
                      command={e}
                      history={history}
                      showInput={showInput}
                    />
                  </>
                );
              }
            })}
          </div>
          <div>
            {passInput ? (
              <></>
            ) : (
              <>
                {" "}
                <InputCommand addCommand={addCommand} history={history} />
              </>
            )}
          </div>
        </div>
      </ScrollToBottom>
    </>
  );
}
