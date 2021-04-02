import React, { useState, useEffect } from 'react';

import './Header.styles.css';
import { useDispatch } from 'react-redux';
import fetchVideos from '../../actions/fetchVideos';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchVideos("wizeline"));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && search != '') {
      dispatch(fetchVideos(search));
      const path = `/`;
      history.push(path);
    }
  }

  return (
    <header className="headerMenu">
      <div className="headerWrapper">
        <span className="menuIcon"/>         
        <input type="text" id="name" placeholder="Search..." 
          onChange={handleChange}
          onKeyPress={handleKeyDown}>
        </input>
      </div>
        
        <div className="headerWrapper">
          <div className="headerToggleWrapper">
            <input type="checkbox" name="darkMode" className="headerToggle" id="darkMode"/>
            <label htmlFor="darkMode" className="headerToggleLabel">Dark mode</label>
          </div>
          <span className="loginIcon"/>
        </div>
      </header>
    );
}

export default Header;