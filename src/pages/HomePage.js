import React, { useState, useEffect } from 'react';
import LandingLayout from '../layouts/layout/LandingLayout';
import '../layouts/styles/LandingLayout.css';

function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src="assets/images/Flash.png" alt="Test"/>
        {/*<div className="splash-placeholder">Loading...</div>*/}
      </div>
    );
  }

  return <LandingLayout />;
}

export default HomePage;
