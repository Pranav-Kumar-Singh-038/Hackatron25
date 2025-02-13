import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import Countdown from "./Countdown";
import GradientText from "./GradientText";
import LinksBtn from "./LinksBtn";
import { GameManager } from "./GameManager";

const Landing = () => {
  const [showGame, setShowGame] = useState(false);
  const canvasRef = useRef(null);
  const gameManagerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setShowGame(prev => !prev);
      }
      if (showGame && gameManagerRef.current) {
        gameManagerRef.current.handleKeyDown(e.key);
      }
    };

    const handleKeyUp = (e) => {
      if (showGame && gameManagerRef.current) {
        gameManagerRef.current.handleKeyUp(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [showGame]);

  useEffect(() => {
    if (!showGame || !canvasRef.current) return;

    gameManagerRef.current = new GameManager(canvasRef.current);
    let animationId;
    let lastTime = 0;

    const gameLoop = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      gameManagerRef.current.update();
      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
      gameManagerRef.current = null;
    };
  }, [showGame]);

  return (
    <section
      id="home"
      className="home"
      style={{ minHeight: "100vh", color: "#fff" }}
    >
      {!showGame ? (
        <div className="logo-div">
          <div className="logo-home">
            {/* <Image
              src="/images/logo-main.webp"
              alt="n"
              priority={true}
              sizes="100%"
              width={100}
              height={100}
            /> */}
          </div>
          <GradientText />
          <Countdown />
          <LinksBtn />
          <div className="game-instruction">
          </div>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          style={{
            background: '#000',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      )}
    </section>
  );
};

export default Landing;