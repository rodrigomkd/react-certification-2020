import React, { useState, useEffect } from 'react';

import './Header.styles.css';
import { useDispatch } from 'react-redux';
import fetchVideos from '../../actions/fetchVideos';
import changeTheme from '../../actions/themeMode';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState("wizeline");
  const [theme, setTheme] = useState("headerMenu");
  const dispatch = useDispatch();
  //const reducer = useSelector((state) => state.reducer);
  const themeReducer = useSelector((state) => state.themeReducer);
  
  
  useEffect(() => {
    dispatch(fetchVideos(search));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleTheme = () => {
    //dispatch(changeTheme('dark'));
    //console.log("reducer: " + themeReducer);
    
    if(themeReducer.mode == 'light') {
      setTheme('headerMenuDark');
      dispatch(changeTheme('dark'));
    } else {
      setTheme('headerMenu');
      dispatch(changeTheme('light'));
    }
    
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && search != '') {
      dispatch(fetchVideos(search));
      const path = `/`;
      history.push(path);
    }
  }

  return (
    <header className={theme}>
      <div className="headerWrapper">
        <span className="menuIcon"/>         
        <input type="text" id="name" placeholder="Search..." 
          onChange={handleChange}
          onKeyPress={handleKeyDown}
          value={search}>
        </input>
      </div>
        
        <div className="headerWrapper">
          <div className="headerToggleWrapper">
            <input type="checkbox" name="darkMode" className="headerToggle" onChange={handleTheme} id="darkMode"/>
            <label htmlFor="darkMode" className="headerToggleLabel">Dark mode</label>
          </div>
          <span className="loginIcon"/>
        </div>
      </header>
    );
}

export default Header;