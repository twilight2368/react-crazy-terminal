import React, { useEffect, useState } from "react";
import "./style/style.css";

export default function Banner(params) {
  const [lines, setLines] = useState([
    false,
    false,
    false,
    false,
    false,
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
      }, (index + 1) * 65);
    });
  }, []);

  return (
    <div className="banner">
      {lines[0] ? (
        <>
          <span className="text-blue">
            &#169; Twilight2368. All knights reserved. 2024.
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[1] ? (
        <>
          <span className="text-comment-banner">
            /*This website was inspired by ForrestKnight (FK)🌴*/
          </span>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[2] ? (
        <>
          <span className="text">
            &nbsp;__________&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;________&nbsp;&nbsp;___&nbsp;&nbsp;___&nbsp;&nbsp;_________&nbsp;&nbsp;&nbsp;
          </span>
          <br />
        </>
      ) : (
        <></>
      )}

      {lines[3] ? (
        <>
          <span className="text">
            |\___&nbsp;&nbsp;&nbsp;___\\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\&nbsp;&nbsp;\|\&nbsp;&nbsp;\|\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|\&nbsp;&nbsp;\|\&nbsp;&nbsp;&nbsp;____\|\&nbsp;&nbsp;\|\&nbsp;&nbsp;\|\___&nbsp;&nbsp;&nbsp;___\&nbsp;
          </span>
          <br />
        </>
      ) : (
        <></>
      )}

      {lines[4] ? (
        <>
          <span className="text">
            \|___&nbsp;\&nbsp;&nbsp;\_\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\___|\&nbsp;\&nbsp;&nbsp;\\\&nbsp;&nbsp;\|___&nbsp;\&nbsp;&nbsp;\_|&nbsp;
          </span>
          <br />
        </>
      ) : (
        <></>
      )}

      {lines[5] ? (
        <>
          <span className="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;__\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;__\&nbsp;\&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;
          </span>
          <br />
        </>
      ) : (
        <></>
      )}

      {lines[6] ? (
        <>
          <span className="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;\&nbsp;&nbsp;\|\__\_\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\____\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\|\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;\&nbsp;\&nbsp;&nbsp;\&nbsp;
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[7] ? (
        <>
          <span className="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;\__\&nbsp;\&nbsp;\____________\&nbsp;\__\&nbsp;\_______\&nbsp;\__\&nbsp;\_______\&nbsp;\__\&nbsp;\__\&nbsp;&nbsp;&nbsp;\&nbsp;\__\
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[8] ? (
        <>
          <span className="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|__|&nbsp;&nbsp;\|____________|\|__|\|_______|\|__|\|_______|\|__|\|__|&nbsp;&nbsp;&nbsp;&nbsp;\|__|
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
      {lines[9] ? (
        <>
          <br />
          <span className="text-yellow">
            Welcome to my crazy React terminal🚀.
          </span>
          <br />
        </>
      ) : (
        <></>
      )}

      {lines[10] ? (
        <>
          <span className="text-yellow">
            For a list of available commands, type{" "}
            <b className="help-banner-text">'help'</b>.
          </span>
          <br />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

/** Banner
 ______   __     __     __     __         __     ______     __  __     ______ 
/\__  _\ /\ \  _ \ \   /\ \   /\ \       /\ \   /\  ___\   /\ \_\ \   /\__  _\
\/_/\ \/ \ \ \/ ".\ \  \ \ \  \ \ \____  \ \ \  \ \ \__ \  \ \  __ \  \/_/\ \/
   \ \_\  \ \__/".~\_\  \ \_\  \ \_____\  \ \_\  \ \_____\  \ \_\ \_\    \ \_\
    \/_/   \/_/   \/_/   \/_/   \/_____/   \/_/   \/_____/   \/_/\/_/     \/_/            
 */
