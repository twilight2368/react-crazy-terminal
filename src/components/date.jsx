import { useEffect, useState } from "react";

export default function DateDisplay(params) {
  const [date, setDate] = useState();

  useEffect(() => {
    const today = new Date();
    setDate(today);
  }, []);

  return (
    <>
      {date && (
        <div style={{ marginLeft: "2rem" }}>
          <span
            style={{
              color: "var(--light-yellow)",
              textShadow: "1px 1px var(--light-red)",
            }}
          >
            {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
          </span>
          &nbsp;&nbsp;
          <span
            style={{
              color: "var(--light-blue)",
              textShadow: "1px 1px var(--light-green)",
            }}
          >
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
          </span>
          <br />
          <br />
        </div>
      )}
    </>
  );
}
