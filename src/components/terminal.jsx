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

  function addCommand(command) {
    setHistory((prevCommands) => [...prevCommands, command.toLowerCase()]);
    setCommands((prevCommands) => [...prevCommands, command.toLowerCase()]);
  }

  return (
    <>
      <ScrollToBottom className="ROOT_CSS">
        <div className="terminal" id="terminal">
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
                    <ResultCommand command={e} history={history} />
                  </>
                );
              }
            })}
          </div>
          <InputCommand addCommand={addCommand} history={history} />
        </div>
      </ScrollToBottom>
    </>
  );
}
