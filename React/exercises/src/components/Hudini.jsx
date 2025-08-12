import React, { useState } from "react";

function Hudini() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>do magic</button> 
      <div>{show ? "Now you see me" : "Now you don't"}</div>
    </div>
  );
}
export default Hudini;
