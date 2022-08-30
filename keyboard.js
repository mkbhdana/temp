import React from "react";

function Keyboard() {
  return (
    <div>


      <div className="keyboard">
        <p>Press the keys on your keyboard to run the test</p>
        {/* <!-- 1st row --> */}
        <div className="row">
          <div className="group">
            <kbd data-key="27" className="key">Esc</kbd>
            <div className="mini-group">
              <kbd data-key="112" className="key"
              >F1</kbd>
              <kbd data-key="113" className="key"
              >F2</kbd>
              <kbd data-key="114" className="key"
              >F3</kbd>
              <kbd data-key="115" className="key"
              >F4</kbd>
            </div>
            <div className="mini-group">
              <kbd data-key="116" className="key"
              >F5</kbd>
              <kbd data-key="117" className="key"
              >F6</kbd>
              <kbd data-key="118" className="key"
              >F7</kbd>
              <kbd data-key="119" className="key"
              >F8</kbd>
            </div>
            <div className="mini-group">
              <kbd data-key="120" className="key"
              >F9</kbd>
              <kbd data-key="121" className="key"
              >F10</kbd>
              <kbd data-key="122" className="key"
              >F11</kbd>
              <kbd data-key="123" className="key"
              >F12</kbd>
            </div>
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
            <kbd data-key="100" className="key"
            >4<i className="fas fa-long-arrow-alt-left"></i
            ></kbd>
            <kbd data-key="101" className="key num-special">5<i>_</i></kbd>
            <kbd data-key="102" className="key"
            >6<i className="fas fa-long-arrow-alt-right"></i
            ></kbd>
            <p className="key key-empty"></p>
          </div>
        </div>

        {/* <!-- 5th row --> */}
        <div className="row">
          <div className="group">
            <kbd data-key="16" className="key shift l-s"
            ><span>⇧</span>&nbsp;Shift</kbd
            >
            <kbd data-key="90" className="key">Z</kbd>
            <kbd data-key="88" className="key">X</kbd>
            <kbd data-key="67" className="key">C</kbd>
            <kbd data-key="86" className="key">V</kbd>
            <kbd data-key="66" className="key">B</kbd>
            <kbd data-key="78" className="key">N</kbd>
            <kbd data-key="77" className="key">M</kbd>
            <kbd data-key="188" className="key">&lt;<span>,</span></kbd>
            <kbd data-key="190" className="key">&gt;<span>.</span></kbd>
            <kbd data-key="191" className="key">?<span>/</span></kbd>
            <kbd data-key="16" className="key shift r-s"
            ><span>⇧</span>&nbsp;Shift</kbd
            >
          </div>
          <div className="group">
            <p className="key key-empty"></p>
            <kbd data-key="38" className="key"
            ><i className="fas fa-arrow-up"></i
            ></kbd>
            <p className="key key-empty"></p>
          </div>
          <div className="group">
            <kbd data-key="97" className="key">1<span>End</span></kbd>
            <kbd data-key="98" className="key"
            >2<i className="fas fa-long-arrow-alt-down"></i
            ></kbd>
            <kbd data-key="99" className="key">3<span>PdDn</span></kbd>
            <kbd data-key="13" className="key num-large">Enter</kbd>
          </div>
        </div>

        {/* <!-- 6th row --> */}
        <div className="row">
          <div className="group">
            <kbd data-key="17" className="key">Ctrl</kbd>
            <kbd data-key="-2" className="key">Fn</kbd>
            <kbd data-key="91" className="key"
            ><i className="fab fa-windows"></i
            ></kbd>
            <kbd data-key="18" className="key">Alt</kbd>
            <kbd data-key="32" className="key spacebar">Space</kbd>
            <kbd data-key="18" className="key">Alt</kbd>
            <kbd data-key="-2" className="key">Fn</kbd>
            <kbd data-key="17" className="key">Ctrl</kbd>
          </div>
          <div className="group">
            <kbd data-key="37" className="key"
            ><i className="fas fa-arrow-left"></i
            ></kbd>
            <kbd data-key="40" className="key"
            ><i className="fas fa-arrow-down"></i
            ></kbd>
            <kbd data-key="39" className="key"
            ><i className="fas fa-arrow-right"></i
            ></kbd>
          </div>
          <div className="group">
            <kbd data-key="96" className="key num-ins">0<span>Ins</span></kbd>
            <kbd data-key="110" className="key">.<span>Del</span></kbd>
            <p className="key key-empty"></p>
          </div>
        </div>
      </div>
      {/* </div> */}

    </div>
  );
}

export default Keyboard;
