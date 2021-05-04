import React from 'react';
import { bool } from 'prop-types';
import { useAuth } from '../../providers/Auth/Auth.provider';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: ${({ theme }) => theme == 'headerMenuDark' ? 'rgba(66,66,66,1)' : 'white'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 30vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  border-width: 1px;
  
  a {
    
    color: ${({ theme }) => theme == 'headerMenuDark' ? 'white' : 'black'};

    &:hover {
      background: ${({ theme }) => theme == 'headerMenuDark' ? 'rgba(77,77,77,1)' : 'rgba(245,245,245,1)'};
    }
  }
`;

const MenuLink = ({ title, linkTo, isPrivate, setOpen, isAuthenticated }) => {
  let show = true;
  if(isPrivate && !isAuthenticated) {
    show = false;
  }

  const onSetOpen = () => {
    setOpen(false);
  }

  return (
    <div>
    {show ? 
      <a href={linkTo} onClick={onSetOpen}>{title}</a>
      : null
    }
    </div>
  )
}

const Menu = ({ theme, open, setOpen }) => {
  const { authenticated } = useAuth();

  return (
    <StyledMenu open={open} theme={theme}>
      <br />
      <br />

      <MenuLink 
        title="Home" 
        linkTo="/" 
        setOpen={setOpen}
        isPrivate={false} />

      <MenuLink 
        title="Favorites" 
        linkTo="/#/favorites" 
        setOpen={setOpen}
        isPrivate={true} 
        isAuthenticated={authenticated} />

    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;