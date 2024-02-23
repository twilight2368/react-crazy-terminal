import { useEffect, useRef, useState } from "react";
import "./style/game.css";

export default function Game(props) {
  const gamearea = useRef(null);
  const [ground1, setGround1] = useState(0);
  const [ground2, setGround2] = useState(1000);
  const [score, setScore] = useState(0);
  const [timeline, setTimeline] = useState(0);
  const [levelspeed, setLeverspeed] = useState(1);
  const [maxDistanceLevel, setMaxDistanceLevel] = useState(500);
  const animationFrameId = useRef(null);

  function animate(time) {
    setScore(score + 1);
    setTimeline(Math.floor(time));

    if (score > maxDistanceLevel) {
      setMaxDistanceLevel((pre) => pre + 500);
      //console.log(levelspeed)
      if (levelspeed < 5) {
        setLeverspeed(levelspeed + 0.5);
      } else {
        setLeverspeed(5);
      }
    }

    if (ground1 > -1000) {
      setGround1((preGround1) => preGround1 - levelspeed);
    } else {
      setGround1(1000);
    }
    if (ground2 > -1000) {
      setGround2((preGround2) => preGround2 - levelspeed);
    } else {
      setGround2(1000);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [ground1, ground2, score]);

  return (
    <>
      <div className="game-area" ref={gamearea} autoFocus onKeyDown={(e)=>{
        if(e.key === "Space"){
          console.log("hi")
        }

        onclick((e)=>{
          console.log('hi');
        })
      }}>
        {/* <span>{Math.floor(score / 10)}</span> */}

 

        <Dinosaur isRunning={true} timeline={timeline} />
        <Ground ground1={ground1} ground2={ground2} />

        
      </div>
    </>
  );
}

function Dinosaur(props) {
  if (props.isJumping) {
    return (
      <>
        <img
          src={require("./asset/dino-stationary.png")}
          alt=""
          style={{ height: "45px", position: "absolute", left: "40px" }}
        />
      </>
    );
  }

  if (props.isStart) {
    return (
      <>
        <img
          src={require("./asset/dino-stationary.png")}
          alt=""
          style={{ height: "45px", position: "absolute", left: "40px", bottom:"0" }}
        />
      </>
    );
  }

  if (props.isLost) {
  }

  if (props.isRunning) {
    return (
      <>
        <img
          src={require("./asset/dino-run-" +
            (Math.floor(props.timeline/80) % 2) +
            ".png")}
          alt=""
          style={{
            height: "45px",
            position: "absolute",
            left: "40px",
            bottom: "0",
            zIndex: "2",
          }}
        />
      </>
    );
  }
}

function Ground(props) {
  return (
    <>
      <img
        src={require("./asset/ground.png")}
        alt=""
        srcset=""
        height={10}
        className="ground"
        style={{
          left: props.ground1 + "px",
          width: "1005px",
          position: "absolute",
          bottom: "0",
          margin: "0",
          padding: "0",
          zIndex: "0",
        }}
      />
      <img
        src={require("./asset/ground.png")}
        alt=""
        srcset=""
        height={10}
        className="ground"
        style={{
          left: props.ground2 + "px",
          width: "1005px",
          position: "absolute",
          bottom: "0",
          margin: "0",
          padding: "0",
          zIndex: "0",
        }}
      />
    </>
  );
}


      //  <img
      //    src={require("./asset/cactus.png")}
      //    alt=""
      //    srcset=""
      //    style={{
      //      height: "45px",
      //      position: "absolute",
      //      bottom: "0",
      //      left: ground1 + "px",
      //      zIndex: "2",
      //    }}
      //  />;