import { useEffect, useRef, useState } from "react";
import "./style/game.css";

export default function Game(props) {
  const gamearea = useRef(null);
  const [ground1, setGround1] = useState(0);
  const [ground2, setGround2] = useState(1000);
  const [score, setScore] = useState(0);
  const [timeline, setTimeline] = useState(0);
  const [levelspeed, setLeverspeed] = useState(1);
  const [maxDistanceLevel, setMaxDistanceLevel] = useState(1000);
  const [dinoposition, setDinoposition] = useState(0);
  const [isJump, setIsjump] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [cactusAll, setCactusAll] = useState([]);
  const [isOver, setOver] = useState(false);
  const [isDown, setIsdown] = useState(false);

  const dinoSize = { height: 50, width: 40 };
  const animationFrameId = useRef(null);
  const dinoGroundPosition = 80;

  const cactusConfig = {
    minheight: 50,
    minwidth: 25,
    maxheight: 65,
    maxwidth: 30,
  };

  const jumpHeight = 150;
  const jumpSpeedUp = 10;
  const gravity = 5;
  const MIN_POSITION_GENERATE = 400;
  const MAX_POSTION_GENERATE = 600;

  function generatePosition() {
    return (
      Math.random() * (MAX_POSTION_GENERATE - MIN_POSITION_GENERATE) +
      MIN_POSITION_GENERATE
    );
  }

  function GenerateCactus(lastCactus) {
    const cactusElement = {
      position: generatePosition() + lastCactus,
      height: Math.floor(
        Math.random() * (cactusConfig.maxheight - cactusConfig.minheight) +
          cactusConfig.minheight
      ),
      width: Math.floor(
        Math.random() * (cactusConfig.maxwidth - cactusConfig.minwidth) +
          cactusConfig.minwidth
      ),
    };
    setCactusAll((prevCacti) => [...prevCacti, cactusElement]);
  }

  function updateAllCactus(levelSpeed) {
    const newCactus = [];
    cactusAll.forEach((e) => {
      if (e.position > -100) {
        e.position -= levelSpeed;
        newCactus.push(e);
      }
    });

    setCactusAll((pre) => newCactus);
  }

  function checkDinoCactusisCollision(dinoXposition, dinoWidth, dinoYposition) {
    cactusAll.forEach((cactus) => {
      if (
        (dinoXposition >= cactus.position &&
          dinoXposition <= cactus.position + cactus.width) ||
        (dinoXposition + dinoWidth >= cactus.position &&
          dinoXposition + dinoWidth <= cactus.position + cactus.width)
      ) {
        if (dinoYposition <= cactus.height && dinoYposition > 0) {
          cancelAnimationFrame(animationFrameId.current);
          setOver(true);
        } else if (dinoYposition === 0) {
          cancelAnimationFrame(animationFrameId.current);
          setOver(true);
        }
      }
    });
  }

  function animate(time) {
    setScore((pre) => pre + 1);
    setTimeline(Math.floor(time) % 1000);

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

    if (isJump) {
      var currentpositon = dinoposition;
      if (currentpositon < jumpHeight && !isDown) {
        setDinoposition((pre) => pre + 0.6 * jumpSpeedUp);
        currentpositon += 0.75 * jumpSpeedUp;
        if (currentpositon >= jumpHeight) {
          setIsdown(true);
        }
      } else if (currentpositon > 0 && isDown) {
        setDinoposition((pre) => pre - 0.2 * levelspeed * gravity);
        currentpositon -= 0.45 * gravity;
      } else if (currentpositon <= 0 && isDown) {
        setDinoposition(0);
        setIsjump(false);
        setIsdown(false);
      }
    }

    checkDinoCactusisCollision(
      dinoGroundPosition,
      dinoSize.width,
      dinoposition
    );

    updateAllCactus(levelspeed);

    animationFrameId.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (isOver) {

      cancelAnimationFrame(animationFrameId.current);
      return;
    }

    if (!isStart) {
      if (cactusAll.length <= 5) {
        if (cactusAll.length >= 1) {
          GenerateCactus(cactusAll[cactusAll.length - 1].position);
        } else {
          GenerateCactus(500);
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [ground1, ground2, score, isStart, cactusAll, isOver]);

  return (
    <>
      <div
        className="game-area"
        ref={gamearea}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === "Space") {
            if (!isStart) {
              if (!isOver) {
                if (!isJump) {
                  //console.log("LOL");
                  setIsjump(true);
                }
              }
            }
          }
        }}
      >
        <div>
          <span className="score-display">
            {" "}
            Your score: <span> {Math.floor(score / 10)}</span>
          </span>
          {isStart ? (
            <>
              <button
                className="start-game-button"
                onClick={(e) => {
                  setIsStart(false);
                  gamearea.current.focus();
                }}
              >
                Click here to play
              </button>
            </>
          ) : (
            <></>
          )}
          {isOver ? (
            <>
              <ShowLose />
            </>
          ) : (
            <></>
          )}
          <Dinosaur
            isRunning={!isJump || isStart}
            timeline={timeline}
            dinoSize={dinoSize}
            dinoposition={dinoposition}
            dinoGroundPosition={dinoGroundPosition}
          />
          <>
            {cactusAll.map((e) => {
              return (
                <>
                  <Cactus
                    position={e.position}
                    height={e.height}
                    width={e.width}
                  />
                </>
              );
            })}
          </>
          <Ground ground1={ground1} ground2={ground2} />
        </div>
      </div>
      <div className="game-instruction">
        <div className="text-display">Press</div>
        <div className="spacekey-display">SPACE</div>
        <div className="text-display">to jump</div>
      </div>
    </>
  );
}

function Dinosaur(props) {
  const imgsrc = ["dino-run-0.png", "dino-run-1.png", "dino-stationary.png"];
  if (props.isRunning) {
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
            left: props.dinoGroundPosition + "px",
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
          src={require("./asset/" + imgsrc[2])}
          alt=""
          style={{
            height: props.dinoSize.height + "px",
            width: props.dinoSize.width + "px",
            position: "absolute",
            left: props.dinoGroundPosition + "px",
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
        style={{
          height: props.height + "px",
          width: props.width + "px",
          position: "absolute",
          bottom: "0",
          left: props.position + "px",
          zIndex: "2",
        }}
      />
    </>
  );
}
