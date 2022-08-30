import React from "react";


function Header() {
  return (
    <div className="wrapper">

      <div className="container">
        <h1 style={{ fontWeight: 'bold', color: 'steelblue' }}>Keyboard Test</h1>
        <p style={{ color: 'gray' }}>
          Free online keyboard test to check if the keyboard keys are working well
          or not.
        </p>
        <textarea
          className="form-control"
          rows="7"
          cols="80"
          placeholder="Press any key...."
          style={{ maxWidth: '95%' }}
        ></textarea>
      </div>
    </div >
  );
}

export default Header;
