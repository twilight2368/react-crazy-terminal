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
  const [dinoposition, setDinoposition] = useState(0);
  const [isJump, setIsjump] = useState(false);
  const dinoSize = { height: 45, with: 30 };
  const animationFrameId = useRef(null);

  function jump() {
    if (isJump) {
      return;
    }
    let jumpHeight = 140; // Adjust jump height as needed
    let jumpSpeed = 4.5; // Adjust jump speed as needed
    let currentPosition = dinoposition;

    function jumpUp() {
      if (currentPosition >= jumpHeight) {
        clearInterval(interval); // Clear the interval when the dinosaur reaches the top
        interval = setInterval(jumpDown, 10); // Start descending after reaching the peak
      } else {
        setDinoposition((prevPosition) => prevPosition + jumpSpeed);
        //console.log(dinoposition);
        currentPosition += jumpSpeed;
      }
    }

    function jumpDown() {
        if (currentPosition > 0) {
          setDinoposition((prevPosition) => prevPosition - jumpSpeed); 
           currentPosition -= jumpSpeed;
          //console.log(dinoposition)
        }else{
          setDinoposition(0)
          setIsjump(false);
          clearInterval(interval); 
        }
    }

    let interval = setInterval(jumpUp, 10); // Start the upward animation
  }

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
      <div
        className="game-area"
        ref={gamearea}
        tabIndex={0}
        onKeyDown={(e) => {
          console.log("LOL");

          if (e.code === "Space") {
            setIsjump(true);
            jump();
          }
        }}
      >
        <div>
          {/* <span>{Math.floor(score / 10)}</span> */}
          {/* <StartPlayButton /> */}
          {/* <ShowLose/> */}
          <Dinosaur
            isRunning={!isJump}
            timeline={timeline}
            dinoSize={dinoSize}
            dinoposition={dinoposition}
          />
          <Ground ground1={ground1} ground2={ground2} />
          <Cactus position={ground1} />
          <Cactus position={ground2} />
        </div>
      </div>
    </>
  );
}

function Dinosaur(props) {
  const imgsrc = ["dino-run-0.png", "dino-run-1.png", "dino-stationary.png"];
  if (props.isRunning === true) {
    return (
      <>
        <img
          src={require("./asset/" +
            imgsrc[Math.floor(props.timeline / 80) % 2])}
          alt=""
          style={{
            height: props.dinoSize.height + "px",
            width: props.dinoSize.width + "px",
            position: "absolute",
            left: "80px",
            bottom: props.dinoposition + "px",
            zIndex: "3",
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <img
          src={require("./asset/" +
            imgsrc[2])}
          alt=""
          style={{
            height: props.dinoSize.height + "px",
            width: props.dinoSize.width + "px",
            position: "absolute",
            left: "80px",
            bottom: props.dinoposition + "px",
            zIndex: "3",
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
        height={10}
        className="ground"
        style={{
          left: props.ground1 + "px",
          width: "1050px",
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
        height={10}
        className="ground"
        style={{
          left: props.ground2 + "px",
          width: "1050px",
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

function StartPlayButton(params) {
  return (
    <>
      <button className="start-game-button">Click here to play</button>
    </>
  );
}

function ShowLose(params) {
  return (
    <>
      <span className="lose-game-display">GAME OVER</span>
    </>
  );
}

function Cactus(props) {
  return (
    <>
      <img
        src={require("./asset/cactus.png")}
        alt=""
        srcset=""
        style={{
          height: "60px",
          position: "absolute",
          bottom: "0",
          left: props.position + "px",
          zIndex: "2",
        }}
      />
    </>
  )
}