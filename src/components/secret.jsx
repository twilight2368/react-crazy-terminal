import { useEffect, useRef, useState } from "react";
import "./style/style.css";
export default function SudoDisplay(props) {
  const [pass, setPass] = useState("");
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [waiting, setWating] = useState(true);
  const passINPUT = useRef(null);

  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_PASSWORD);
  }, []);

  return (
    <>
      <div
        className="pass-input"
        onClick={(e) => {
          passINPUT.current.focus();
        }}
      >
        <div className="pass-input-star">
          <span
            style={{
              color: "var(--light-red)",
              textShadow: "0px 0px 5px var(--dark-red)",
              whiteSpace: "nowrap",
            }}
          >
            Password:{" "}
          </span>
          {pass.split("").map((e) => (
            <span style={{ color: "var(--comment)" }}>*</span>
          ))}
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            props.showInput();
            if (pass === process.env.REACT_APP_SECRET_PASSWORD) {
              setCorrect(true);
              setTimeout(() => {
                setWating(false);
                window.open(process.env.REACT_APP_SECRET_LINK);
              }, 1000);
            } else {
              setWrong(true);
            }
          }}
        >
          <input
            type="text"
            ref={passINPUT}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="pass-input-text"
            autoFocus
          />
        </form>
        <div>
          {correct ? (
            <>
              <p>
                {waiting ? (
                  <>
                    <span>
                      <span
                        style={{
                          color: "var(--light-yellow)",
                          textShadow: "1px 1px 1px var(--dark-yellow)",
                        }}
                      >
                        Loading...
                      </span>
                      😇
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <span
                        style={{
                          color: "var(--light-green)",
                          textShadow: "1px 1px 1px var(--dark-green)",
                        }}
                      >
                        Done.
                      </span>
                      🎉🎉🎉
                    </span>
                  </>
                )}
              </p>
            </>
          ) : (
            <> </>
          )}
        </div>
        <div>
          {wrong ? (
            <>
              <span
                style={{
                  color: "var(--light-red)",
                  textShadow: "1px 1px 2px var(--dark-red)",
                }}
              >
                Wrong password
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
