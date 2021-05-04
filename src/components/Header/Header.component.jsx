import React from 'react';

import './Header.styles.css';

function Header() {

    return (
      <header className="headerMenu">
        <div className="headerWrapper">
          <span className="menuIcon"/>         
          <input type="text" id="name" placeholder="Search...">
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
