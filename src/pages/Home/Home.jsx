import React, { useRef } from 'react';

import './Home.css';
import VideoList from '../../components/VideoList/VideoList';

function Home() {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef}>
      <h2 className="title">Welcome to the Challenge!</h2>
      <VideoList />
    </div>
  );
}

export default Home;
