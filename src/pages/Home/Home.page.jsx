import React, { useRef } from 'react';

import './Home.styles.css';
import VideoList from '../../components/VideoList';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef}>
      <h2 className="title">Welcome to the Challenge!</h2>
      <VideoList />
    </div>
  );
}

export default HomePage;
