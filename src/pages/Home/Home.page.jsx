import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
//import mockedData from '../../mock/youtube-videos-mock.json';
import VideoList from '../../components/VideoList';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <div ref={sectionRef}>
      <h2 className="title">Welcome to the Challenge!</h2>
      <VideoList />
    </div>
  );
}

export default HomePage;
