import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styles';
import { useAuth } from '../../providers/Auth';

const Menu = ({ theme, open, ...props }) => {
  const { authenticated } = useAuth();
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <br />
      <br />
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Home
      </a>
      {authenticated ? 
      <a href="/favorites" tabIndex={tabIndex}>
      <span aria-hidden="true"></span>
      Favorites
      </a>
      :
      null  
      }
      
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;