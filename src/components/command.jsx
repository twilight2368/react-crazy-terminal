import "./style/style.css";

export default function DisplayCommand(props) {
  return (
    <>
      <div className="command-display-area">
        <span className="command-display-area-span">{props.command}</span>
      </div>
    </>
  );
}
