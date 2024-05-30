import React, { useState, useEffect } from 'react';
import './s.css';

const HexGrid = () => {
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setLastMousePosition({ x: e.clientX, y: e.clientY });
      updateLightPosition(e.clientX, e.clientY);
    };

    const updateLightPosition = (clientX, clientY) => {
      const light = document.querySelector(".light");
      const scrollX = window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
      const scrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
      const bodyWidth = document.body.offsetWidth;
      const bodyHeight = document.body.offsetHeight;
      const maxX = bodyWidth - 200;
      const maxY = bodyHeight - 200;

      let adjustedX = clientX + scrollX;
      let adjustedY = clientY + scrollY;

      adjustedX = Math.min(adjustedX, maxX);
      adjustedY = Math.min(adjustedY, maxY);

      if (adjustedX && adjustedY) {
        light.style.left = `${adjustedX}px`;
        light.style.top = `${adjustedY}px`;
      }
    };

    let scrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!scrolling) {
        scrolling = true;
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        scrolling = false;
        if (lastMousePosition.x && lastMousePosition.y)
          updateLightPosition(lastMousePosition.x, lastMousePosition.y);

      }, 200);
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastMousePosition]);

  return (
    <>
      <div className="light"></div>
      <div className="grid"></div>
    </>
  );
}

export default HexGrid;
