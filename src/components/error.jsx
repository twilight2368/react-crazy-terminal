export default function ErrorDisplay(params) {
    return (
      <>
        <div className="">
          <span
            style={{
              marginRight: "10px",
              color: "var(--dark-red)",
              textShadow: "1px 1px 1px var(--light-red)",
              textTransform: "uppercase",
            }}
          >
            Error:
          </span>
          <span
            style={{
              color: "var(--comment)",
            }}
          >
            Command not found. For a list of commands, type{" "}
            <b className="help-banner-text">'help'</b>.
          </span>
          <br />
          <br />
        </div>
      </>
    );
}