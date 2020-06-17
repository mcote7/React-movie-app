import React from 'react';

const InfoSideBar = ({ currentPage, onDeleteAll }) => {
  return (
    <div className="col-2 pt-3 info-side">
      <p className="m-0">Want to go back ?</p>
      <span onClick={() => onDeleteAll()}
      style={{fontSize: "xx-small"}}>( delete all )</span>
      <hr/>
      <a href="/">go back here</a>&nbsp;
      <span className="">( {currentPage} )</span>
      <hr/>
      <p>"Cosmic<a href="/"> ocean </a>encyclopaedia galactica of brilliant syntheses
        <a href="/"> billions </a> upon <a href="/"> billions </a>
        invent the universe prime number. Venture not a sunrise but a
        <a href="/"> galaxyrise Cambrian explosion bits </a>
        of moving fluff colonies stirred by starlight?
        <a href="/" > Emerged into </a> consciousness?"</p>
    </div>
  );
}

export default InfoSideBar;


