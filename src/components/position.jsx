import React, { useState, useEffect } from "react";

function LocationDisplay() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successHandler = (pos) => {
      setPosition(pos.coords);
    };

    const errorHandler = (err) => {
      setError(err.message);
      setPosition(true);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  return (
    <div style={{ marginLeft: "2rem" }}>
      {position ? (
        <>
          {error ? (
            <>
              <p className="error-position">
                <span
                  style={{
                    color: "var(--light-red)",
                    textShadow: "1px 1px 1px var(--dark-red)",
                  }}
                >
                  {" "}
                  Errors
                </span>{" "}
                <span style={{ color: "var(--comment)" }}>{error}</span>
              </p>
            </>
          ) : (
            <>
              <div style={{ color: "var(--comment)" }}>
                <p>
                  Latitude:{" "}
                  <span
                    style={{
                      color: "var(--light-red)",
                      textShadow: "1px 1px var(--dark-red)",
                    }}
                  >
                    {position.latitude}
                  </span>
                </p>
                <p>
                  Longitude:{" "}
                  <span
                    style={{
                      color: "var(--light-blue)",
                      textShadow: "1px 1px var(--dark-blue)",
                    }}
                  >
                    {position.longitude}
                  </span>
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <><span style={{color:"var(--dark-yellow)", textShadow:"1px 1px var(--dark-red)"}}>Loading ...</span></>
      )}
    </div>
  );
}

export default LocationDisplay;
/**
 *  <p className="error-position">
          <span
            style={{
              color: "var(--light-red)",
              textShadow: "1px 1px 1px var(--dark-red)",
            }}
          >
            {" "}
            Errors
          </span>{" "}
          <span style={{ color: "var(--comment)" }}>{error}</span>
        </p>

         <div style={{ color: "var(--comment)" }}>
          <p>
            Latitude:{" "}
            <span style={{ color: "var(--light-red)", textShadow:"1px 1px var(--dark-red)" }}>
              {position.latitude}
            </span>
          </p>
          <p>
            Longitude:{" "}
            <span style={{ color: "var(--light-blue)", textShadow:"1px 1px var(--dark-blue)" }}>
              {position.longitude}
            </span>
          </p>
        </div>
 */