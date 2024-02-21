import React, { useEffect, useState } from "react";
import "./style/style.css";

export default function AboutMe() {
  const bio =
    "✨ Hey, I'm Twilight, an introverted coder who finds solace in HTML, JavaScript, CSS, and the tranquility of React. Join me as I quietly craft digital wonders in the comfort of code. 🌿 ";
  const hastag = ["#IntrovertedCoder👨‍💻", "#ReactFanatic⚡"];
  const [lines, setLines] = useState("");
  const [showHastag, setShowHastag] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    let newLine = "";
    for (let i = 0; i < bio.length; i++) {
      setTimeout(() => {
        newLine += bio[i];
        setLines(newLine);
      }, i * 40);
    }

    setTimeout(() => {
      setShowHastag(true);
    }, bio.length * 40 + 10);

    setTimeout(() => {
      setShowLink(true);
    }, bio.length * 40 + 20);
  }, []);

  return (
    <div
      style={{
        color: "var(--white)",
        textShadow: "1px 1px 1px var(--light-blue)",
        width: "50%",
        marginLeft: "2rem",
      }}
    >
      {lines}
      <br />
      <br />
      <div>
        {showHastag ? (
          <>
            {" "}
            <span
              style={{
                color: "var(--light-yellow)",
                textShadow: "1px 1px 1px var(--light-red)",
                width: "50%",
              }}
            >
              {hastag[0]}
            </span>
            &nbsp;&nbsp;
            <span
              style={{
                color: "var(--light-blue)",
                textShadow: "1px 1px 1px var(--light-green)",
                width: "50%",
              }}
            >
              {hastag[1]}
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
      <br />
      <div>
        {showLink ? (
          <>
            <span style={{ color: "var(--comment)" }}>🤖 My Github: </span>
            <span>
              <a
                href="https://github.com/twilight2368"
                target="_blank"
                className="github-link"
              >
                @Twilight2368
              </a>
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
      <br />
    </div>
  );
}
