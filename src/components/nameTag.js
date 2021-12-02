import React from "react";

function nameTag({ name, lastName, style }) {
  if (!name && !lastName) {
    return (
      <div className="name">
        <h3>Invalid First Name</h3>
        <h3>Invalid Last Name</h3>
      </div>
    );
  }
  return (
    <div className="name">
      <h3 style={style}>First Name:{name}</h3>
      <h3 style={style}>Last Name:{lastName}</h3>

      {name === "John" && <div style={{ color: "green" }}>VIP</div>}
    </div>
  );
}

export default nameTag;
