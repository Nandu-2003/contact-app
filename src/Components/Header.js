import React from "react";

function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container mb-10 py-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2>Contact Manager</h2>
      </div>
    </div>
  );
}

export default Header;
