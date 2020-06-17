import React from 'react';

const NavBar = () => {
  const text = {color: "#61dafb"};
  const smFont = {color: "#61dafb", fontSize: "small"};
  return (
    <nav className="navbar sticky-top navbar-expand-lg myNav-top">
      <img className="ml-2 x navImg" src="favicon.ico" alt="img-react"/>
      <h5 className="ml-2 x" style={text}>HOME</h5>
      <p className="ml-5 mt-2 x" style={smFont}>MOVIES</p>
      <p className="ml-5 mt-2 x" style={smFont}>BACK</p>
    </nav>
  );
};

export default NavBar;