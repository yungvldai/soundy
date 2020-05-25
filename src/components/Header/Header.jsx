import React from 'react';
import classes from './Header.module.scss';
import LogoImage from '../../static/logo.png';

function Header() {
  return (
    <div className={classes.Header}>
      <img
        alt="App logo"
        src={LogoImage}
        className={classes.Logo}
        draggable={false}
      />
    </div>
  );
}

export default Header;
