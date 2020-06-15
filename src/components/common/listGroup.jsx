import React from 'react';

const ListGroup = (props) => {
  const {items, textProperty, valueProperty, onItemSelect} = props;
  return (
  <ul className="list-group">
    {/* <li className="list-group-item list-group-item-action">All Genres</li> */}
    {items && items.map(i => (
      <li key={i[valueProperty]} onClick={() => onItemSelect(i)} className="list-group-item list-group-item-action">{i[textProperty]}<span style={{float: "right"}}>( 0 )</span></li>
    ))}
  </ul>
  );
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty:"_id"
};
export default ListGroup;
//Can reuse with any List//