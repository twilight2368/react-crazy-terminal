import { useState, useEffect } from "react";
import "./style/style.css";

export default function NeoFetch(props) {
  const [lines, setLines] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    lines.forEach((line, index) => {
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
      {lines[0] ? (
        <>
          <span className="neofetch-symbol">
            &nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;_&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;
          </span>

          <br />
        </>
      ) : (
        <></>
      )}
      {lines[1] ? (
        <>
          <span className="neofetch-symbol">
            |&nbsp;|___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_(_)&nbsp;(_)&nbsp;__&nbsp;_|&nbsp;|__&nbsp;|&nbsp;|_&nbsp;
          </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="title-neo">Project name: </span>
          <span
            style={{
              color: "var(--light-red)",
              textShadow: "1px 1px 1px var(--dark-red)",
            }}
          >
            Crary Terminal<span>🦄</span>
          </span>

          <br />
        </>
      ) : (
        <></>
      )}
      {lines[2] ? (
        <>
          <span className="neofetch-symbol">
            |&nbsp;__\&nbsp;\&nbsp;/\&nbsp;/&nbsp;/&nbsp;|&nbsp;|&nbsp;|/&nbsp;_`&nbsp;|&nbsp;'_&nbsp;\|&nbsp;__|
          </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="title-neo">Creator: </span>
          <span
            style={{
              color: "var(--gumball-pink)",
              textShadow: "1px 1px 1px var(--gumball-blue)",
            }}
          >
            @Twilight2368
          </span>

          <br />
        </>
      ) : (
        <></>
      )}
      {lines[3] ? (
        <>
          <span className="neofetch-symbol">
            |&nbsp;|_&nbsp;\&nbsp;V&nbsp;&nbsp;V&nbsp;/|&nbsp;|&nbsp;|&nbsp;|&nbsp;(_|&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;|_&nbsp;
          </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="title-neo">Library: </span>
          <span
            style={{
              color: "var(--light-blue)",
              textShadow: "1px 1px 1px var(--dark-blue)",
            }}
          >
            React
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[4] ? (
        <>
          <span className="neofetch-symbol">
            &nbsp;\__|&nbsp;\_/\_/&nbsp;|_|_|_|\__,&nbsp;|_|&nbsp;|_|\__|
          </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="title-neo">Using: </span>
          <span>
            <span
              style={{
                color: "var(--dark-blue)",
                textShadow: "1px 1px 1px var(--light-blue)",
              }}
            >
              JSX{" "}
            </span>
            <span
              style={{
                color: "var(--light-yellow)",
                textShadow: "1px 1px 1px var(--dark-yellow)",
              }}
            >
              JavaScript{" "}
            </span>
            <span
              style={{
                color: "var(--html)",
                textShadow: "1px 1px 1px var(--light-red)",
              }}
            >
              HTML{" "}
            </span>
            <span
              style={{
                color: "var(--css)",
                textShadow: "1px 1px 1px var(--dark-blue)",
              }}
            >
              CSS
            </span>
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[5] ? (
        <>
          <span className="neofetch-symbol">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
