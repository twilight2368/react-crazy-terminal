import { useEffect, useState } from "react";
import './style/style.css'

export default function DisplayHelp(props) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const initialLines = Array.from(
      { length: props.commandList.length },
      () => false
    );
    setLines(initialLines);

    props.commandList.forEach((command, index) => {
      setTimeout(() => {
        setLines((prevLines) => {
          const newLines = [...prevLines];
          newLines[index] = true;
          return newLines;
        });
      }, (index + 1) * 80);
    });
  }, []);
  return (
    <>
      <div className="help-display-area">
        {lines.map((element, index) => {
          return element ? (
            <>
              <div key={index} className="help-display-line">
                <div style={{ width: "8rem", color: "var(--light-blue)", textShadow:"1px 1px 1px var(--dark-blue)" }}>
                  {props.commandList[index].command}
                </div>
                <div style={{color:'var(--comment)', fontStyle:"italic"}}>{props.commandList[index].comment}</div>
                <br />
              </div>
            </>
          ) : (
            <></>
          );
        })}
        <br />
      </div>
    </>
  );
}
