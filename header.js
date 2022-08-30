import React from "react";


function Header() {
  return (
    <div className="wrapper">

      <div className="container">
        <h1 style={{ fontWeight: 'bold', color: 'steelblue' }}>Keyboard Test</h1>
        <p style={{ color: 'gray', paddingBottom: '30px' }}>Free online keyboard test to check if the keyboard keys are working well or not.</p>
        <textarea
          rows="7"
          cols="130"
          placeholder="Press any key...."
          style={{
            maxWidth: '95%', border: '4px solid white', borderRadius: '8px'
          }}
        ></textarea>
      </div>
    </div >
  );
}

export default Header;
