import React, { useState } from "react";
import { keyboardLeft } from "./data"

function Keyboard() {

  //   let keys = document.querySelectorAll('kbd');

  //   function toggleKeyPress(el) {
  //     if (el.classList.contains('key-press')) {
  //       el.classList.remove('key-press');
  //     } else {
  //       keys.forEach(key => key.classList.remove('key-press'));
  //       el.classList.add('key-press');
  //     }
  //   }

  //   window.addEventListener('keydown', function(e) {

  //     let keyElement = document.querySelector(`kbd[data-key="${e.code}"]`);
  //     toggleKeyPress(keyElement);
  // });

  const [state, setState] = useState({
    hideDeleteIcon: true,
    text: "",
    latestKey: "",
  });

  const handleChange = (e) => {
    const keyCode = e.target.value
      ? e.target.value.toUpperCase()?.charCodeAt(e.target.value.length - 1)
      : null;
    setState({
      ...state,
      text: e.target.value,
      hideDeleteIcon: true,
      latestKey: keyCode,
    });

    const allKeys = document.querySelectorAll("kbd");
    for (let i = 0; i < allKeys.length; i++) {
      const pressedKey = allKeys[i];

      if (+pressedKey.getAttribute("data-key") === +keyCode) {
        pressedKey.classList.add('key-press');

        setTimeout(() => {
          pressedKey.classList.remove('key-press');
        }, 300);
      }
    }
  };







  return (
    <div>
      <div className="container">
        <h1 style={{ fontWeight: 'bold', color: 'steelblue' }}>Keyboard Test</h1>
        <h4 style={{ color: 'whitesmoke', paddingBottom: '30px' }}>Free online keyboard test to check if the keyboard keys are working well or not.</h4>
        <textarea
          rows="7"
          cols="160"
          value={state.text}
          onChange={handleChange}
          style={{
            maxWidth: '95%', border: '4px solid white', borderRadius: '8px'
          }}
        ></textarea>
        <div >
          <svg style={{ filter: 'invert(1)' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.222 18.917c5.666-5.905-.629-10.828-5.011-7.706l1.789 1.789h-6v-6l1.832 1.832c7.846-6.07 16.212 4.479 7.39 10.085z" /></svg>
        </div>
      </div>

      <div className="keyboard-container">



        <div className="keyboard" value={'data-key'}>
          <p style={{ textAlign: 'center', color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Press the keys on your keyboard to run the test</p>
          {/* <!-- 1st row --> */}
          <div className="row">
            <div className="group">

              <kbd data-key="27" className="key">Escape</kbd>
              {keyboardLeft.map((item, i) => (
                <div className="mini-group" key={i}>
                  {item.map((item1, j) => (
                    <kbd className="key" key={j} data-key={item1.keyCode}
                    >{item1.key}</kbd>
                  ))}
                </div>
              ))}
            </div>
            <div className="group lock1">
              <div className="lock1">

                <kbd data-key="-1" className="key">Print Screen</kbd>
                <kbd data-key="145" className="key">Scroll Lock</kbd>
                <kbd data-key="19" className="key">Pause Break</kbd>
              </div>
            </div>
          </div>

          {/* <!-- 2nd row --> */}
          <div className="row">
            <div className="group">
              <kbd data-key="192" className="key large">~<i>`</i></kbd>
              <kbd data-key="49" className="key">!<span>1</span></kbd>
              <kbd data-key="50" className="key">@<span>2</span></kbd>
              <kbd data-key="51" className="key">#<span>3</span></kbd>
              <kbd data-key="52" className="key">$<span>4</span></kbd>
              <kbd data-key="53" className="key">%<span>5</span></kbd>
              <kbd data-key="54" className="key">^<span>6</span></kbd>
              <kbd data-key="55" className="key">&<span>7</span></kbd>
              <kbd data-key="56" className="key">*<span>8</span></kbd>
              <kbd data-key="57" className="key">(<span>9</span></kbd>
              <kbd data-key="48" className="key">)<span>0</span></kbd>
              <kbd data-key="189" className="key">-<i className="underscore">_</i></kbd>
              <kbd data-key="187" className="key">+<span>=</span></kbd>
              <kbd data-key="8" className="key backspace">Backspace</kbd>
            </div>
            <div className="group">
              <kbd data-key="45" className="key">Insert</kbd>
              <kbd data-key="36" className="key">Home</kbd>
              <kbd data-key="33" className="key">Page Up</kbd>
            </div>
            <div className="group">
              <kbd data-key="144" className="key">Num Lock</kbd>
              <kbd data-key="111" className="key">/</kbd>
              <kbd data-key="106" className="key">*</kbd>
              <kbd data-key="109" className="key">-</kbd>
            </div>
          </div>

          {/* <!-- 3rd row --> */}
          <div className="row">
            <div className="group">
              <kbd data-key="9" className="key tab">Tab⭾</kbd>
              <kbd data-key="81" className="key">Q</kbd>
              <kbd data-key="87" className="key">W</kbd>
              <kbd data-key="69" className="key">E</kbd>
              <kbd data-key="82" className="key">R</kbd>
              <kbd data-key="84" className="key">T</kbd>
              <kbd data-key="89" className="key">Y</kbd>
              <kbd data-key="85" className="key">U</kbd>
              <kbd data-key="73" className="key">I</kbd>
              <kbd data-key="79" className="key">O</kbd>
              <kbd data-key="80" className="key">P</kbd>
              <kbd data-key="219" className="key">&#123;<span>	&#91;</span></kbd>
              <kbd data-key="221" className="key">&#125;<span>	&#93;</span></kbd>
              <kbd data-key="220" className="key">|<span>\</span></kbd>
            </div>
            <div className="group">
              <kbd data-key="46" className="key">Delete</kbd>
              <kbd data-key="35" className="key">End</kbd>
              <kbd data-key="34" className="key">Page Down</kbd>
            </div>
            <div className="group">
              <kbd data-key="103" className="key">7<span>Home</span></kbd>
              <kbd data-key="104" className="key num-special"
              >8<i className="fas fa-long-arrow-alt-up"></i
              ></kbd>
              <kbd data-key="105" className="key">9<span>PgUp</span></kbd>
              <kbd data-key="107" className="key num-large">+</kbd>
            </div>
          </div>

          {/* <!-- 4th row --> */}
          <div className="row">
            <div className="group">
              <kbd data-key="20" className="key tab">CapsLock</kbd>
              <kbd data-key="65" className="key">A</kbd>
              <kbd data-key="83" className="key">S</kbd>
              <kbd data-key="68" className="key">D</kbd>
              <kbd data-key="70" className="key">F</kbd>
              <kbd data-key="71" className="key">G</kbd>
              <kbd data-key="72" className="key">H</kbd>
              <kbd data-key="74" className="key">J</kbd>
              <kbd data-key="75" className="key">K</kbd>
              <kbd data-key="76" className="key">L</kbd>
              <kbd data-key="186" className="key">:<span>;</span></kbd>
              <kbd data-key="222" className="key">"<span>'</span></kbd>
              <kbd data-key="13" className="key enter">Enter ↩</kbd>
            </div>
            <div className="empty-group"></div>
            <div className="group">
              <div data-key="100" className="key"
              >4<i className="fas fa-long-arrow-alt-left"></i
              ></div>
              <div data-key="101" className="key num-special">5</div>
              <div data-key="102" className="key"
              >6<i className="fas fa-long-arrow-alt-right"></i
              ></div>
              <p className="key key-empty"></p>
            </div>
          </div>

          {/* <!-- 5th row --> */}
          <div className="row">
            <div className="group">
              <div data-key="16" className="key shift l-s"
              ><span>⇧</span>&nbsp;Shift</div
              >
              <div data-key="90" className="key">Z</div>
              <div data-key="88" className="key">X</div>
              <div data-key="67" className="key">C</div>
              <div data-key="86" className="key">V</div>
              <div data-key="66" className="key">B</div>
              <div data-key="78" className="key">N</div>
              <div data-key="77" className="key">M</div>
              <div data-key="188" className="key">&lt;<span>,</span></div>
              <div data-key="190" className="key">&gt;<span>.</span></div>
              <div data-key="191" className="key">?<span>/</span></div>
              <div data-key="16" className="key shift r-s"
              ><span>⇧</span>&nbsp;Shift</div
              >
            </div>
            <div className="group">
              <p className="key key-empty"></p>
              <div data-key="38" className="key"
              ><i className="fas fa-arrow-up"></i
              ></div>
              <p className="key key-empty"></p>
            </div>
            <div className="group">
              <div data-key="97" className="key">1<span>End</span></div>
              <div data-key="98" className="key"
              >2<i className="fas fa-long-arrow-alt-down"></i
              ></div>
              <div data-key="99" className="key">3<span>PdDn</span></div>
              <div data-key="13" className="key num-large">Enter</div>
            </div>
          </div>

          {/* <!-- 6th row --> */}
          <div className="row">
            <div className="group">
              <div data-key="17" className="key">Ctrl</div>
              <div data-key="-2" className="key">Fn</div>
              <div data-key="91" className="key"
              ><i className="fab fa-windows"></i
              ></div>
              <div data-key="18" className="key">Alt</div>
              <div data-key="32" className="key spacebar">Space</div>
              <div data-key="18" className="key">Alt</div>
              <div data-key="-2" className="key">Fn</div>
              <div data-key="17" className="key">Ctrl</div>
            </div>
            <div className="group">
              <div data-key="37" className="key"
              ><i className="fas fa-arrow-left"></i
              ></div>
              <div data-key="40" className="key"
              ><i className="fas fa-arrow-down"></i
              ></div>
              <div data-key="39" className="key"
              ><i className="fas fa-arrow-right"></i
              ></div>
            </div>
            <div className="group">
              <div data-key="96" className="key num-ins">0<span>Ins</span></div>
              <div data-key="110" className="key">.<span>Del</span></div>
              <p className="key key-empty"></p>
            </div>
          </div>
        </div>
        {/* </div> */}

      </div>
    </div>
  );
}

export default Keyboard;
