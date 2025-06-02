import React, { useState, useRef, useEffect } from 'react';
import './styles/RollingImageComparison.css';

const RollingImageComparison = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const beforeSrc = '/assets/images/Dicaprio meme original.jpg';
  const afterSrc = '/assets/images/Dicaprio swapped with Robert Downey.jpg';

  useEffect(() => {
    const stopDrag = () => setIsDragging(false);

    const onMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.touches?.[0]?.clientX || e.clientX;
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percent);
    };

    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);

    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
    };
  }, [isDragging]);

  const startDrag = () => setIsDragging(true);

  return (
    <div
      className="comparison-container"
      ref={containerRef}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      <img src={afterSrc} alt="After" className="comparison-img" />
      <div
        className="comparison-before-wrapper"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeSrc} alt="Before" className="comparison-img" />
      </div>
      <div className="comparison-handle" style={{ left: `${position}%` }} />
    </div>
  );
};


export default RollingImageComparison;