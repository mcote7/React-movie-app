import React from 'react';

const InfoTopBar = ({ count, filteredLen, movLen, pageSize, currentPage }) => {
  return (
  <div className="col-7 p-0">
    <h1 className="mb-2">Welcome, hey there buddy</h1>
      <h5 className="">We have {count} total movies in the database</h5>
      {filteredLen === 0 ? <p className="pb-2"
      style={{color: "#dc3545", borderBottom: "solid #dc3545"}}>( no movies here . . . )</p> : ''}
        {filteredLen > 0 ? <p className="len-data">Showing&nbsp; {movLen > 1
        ? <span>{movLen} &nbsp;movie's</span>
        :<span>{movLen} movie</span> }&nbsp;
        {(filteredLen / pageSize -1) > 0 ? <span>on page&nbsp; {currentPage} 
        &nbsp;&nbsp;of&nbsp; {(Math.ceil(filteredLen / pageSize))} .</span> : ""}</p> : ""}
    </div>
  );
}

export default InfoTopBar;