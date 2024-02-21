import { useEffect, useState } from "react";
import './style/style.css'
export default function HistoryDisplay(props) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const initialLines = Array.from(
      { length: props.history.length },
      () => false
    );
    setLines(initialLines);

    props.history.forEach((command, index) => {
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
      <div className="history-command-text">
        {lines.map((element, index) => {
          return element ? (
            <>
              <div key={index}>
                <div
                  style={{
                    color: "var(--comment)",
                  }}
                >
                  <span style={{ color: "var(--dark-yellow)" }}>{index + 1}.</span>
                  {props.history[index]}
                </div>
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
