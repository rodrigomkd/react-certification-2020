import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mockedData from '../../mock/youtube-videos-mock.json';
import CardVideo from '../../components/CardVideo';

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
      <h1 className="title">Welcome to the Challenge!</h1>
      {authenticated ? (
        
        <>
        <div className="cards">
        {mockedData.items.map((item, index) => (
          <CardVideo key={index}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.medium.url}
            videoLink={item.snippet.thumbnails.medium.url}
            />
        ))}
        </div>

          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </div>
  );
}

export default HomePage;
