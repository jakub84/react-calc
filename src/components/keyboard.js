import React from 'react'
const Keyboard = (props) => (
    <div className="keyboard-container">
       <input type="button" onClick={props.getValueBtn} className="special" value="C"/>
       <input type="button" onClick={props.getValueBtn} className="special" value="+/-"/>
       <input type="button" onClick={props.getValueBtn} className="special" value="%"/>
       <input type="button" onClick={props.getValueBtn} className="special" value=":"/>
       <input type="button" onClick={props.getValueBtn} value="7"/>
       <input type="button" onClick={props.getValueBtn} value="8"/>
       <input type="button" onClick={props.getValueBtn} value="9"/>
       <input type="button" onClick={props.getValueBtn} className="special" value="*"/>
       <input type="button" onClick={props.getValueBtn} value="4"/>
       <input type="button" onClick={props.getValueBtn} value="5"/>
       <input type="button" onClick={props.getValueBtn} value="6"/>
       <input type="button" onClick={props.getValueBtn} className="special" value="-"/>
       <input type="button" onClick={props.getValueBtn} value="1"/>
       <input type="button" onClick={props.getValueBtn} value="2"/>
       <input type="button" onClick={props.getValueBtn} value="3"/>
       <input type="button" onClick={props.getValueBtn} className="special" value="+"/>
       <input type="button" onClick={props.getValueBtn} value="0"/>
       <input type="button" onClick={props.getValueBtn} value="="/>

    </div>
);
export default Keyboard;