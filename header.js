import React from "react";


function Header() {
  return (
    <div className="wrapper">


      <div className="container">
        <h1 style={{ fontWeight: 'bold', color: 'steelblue' }}>Keyboard Test</h1>
        <h4 style={{ color: 'whitesmoke', paddingBottom: '30px' }}>Free online keyboard test to check if the keyboard keys are working well or not.</h4>
        <textarea
          rows="7"
          cols="160"
          placeholder="Press any key...."
          style={{
            maxWidth: '95%', border: '4px solid white', borderRadius: '8px'
          }}
        ></textarea>
        <div >
          <svg style={{ filter: 'invert(1)' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" /></svg>
        </div>
      </div>
    </div >
  );
}

export default Header;
