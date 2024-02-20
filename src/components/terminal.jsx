import InputCommand from "./input";
import "./style/style.css";
export default function Terminal(props) {

  return (
    <>
      <div className="terminal" id="terminal">
        <InputCommand />
      </div>
    </>
  );
}
