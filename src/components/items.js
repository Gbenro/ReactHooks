import React from "react";
import "./item.css";

function item({
  name,
  calorie,
  onClick,
  editable,
  onDoubleClick,
  onKeyPress,
  index,
}) {
  return (
    <div className="item-style">
      {editable ? (
        <input
          type="text"
          defaultValue={name}
          onKeyPress={(e) => onKeyPress(e, index)}
        />
      ) : (
        <h3 onDoubleClick={onDoubleClick}> {name}</h3>
      )}

      <h3> {calorie}</h3>
      <button name={name} className="remove-button" onClick={onClick}>
        Remove
      </button>
    </div>
  );
}

export default item;
