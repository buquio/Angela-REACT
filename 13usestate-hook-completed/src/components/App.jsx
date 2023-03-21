
import React from "react";

// var isDone = false;
var isDone;


function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;


///////////
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);//destructuring

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;


////////////////
import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000); //to update time every 1000secs

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

//////
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
 
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" /> 
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

///////

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) { //save added changes
    // console.log(event.target.value);
    setName(event.target.value); //here you are using actual input-value not js object-value
  }

  function handleClick(event) {
    setHeading(name); //you are setting the headingtext to target.value i.e name

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      {/* control component */}
        <input
          onChange={handleChange} //on change d event.target value in d input box is saved in name-field  
          type="text"
          placeholder="What's your name?"
          value={name} //sets value to event.target.value
        />
        {/* <button onClick={handleChange}>Submit</button>  */}
        <button type="submit">Submit</button> 

      </form>
    </div>
  );
}

export default App;

//////////
//2 testpractice///////
import React from "react";

function ToDoItem(props) {
  const {isDone, setisDone} = useState(false);

  function handleClick(){
    setisDone(prevValue => { ///check for isdone-value i.e false & reverse it to true
      return !prevValue; //true

    });
  }
  return (
    <div onClick={handleClick }>
      <li style {{textDecoration: isDone ? "line-through": "none" }}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;


//////////
// the code runs from top to bottom but does nothing until d div is clicked
// on clicking the div, the handleClick-fxn is called, 
// then setisdone-fxn is called which check for isdone-value i.e false & reverse it to true
// then look for any other place isdone is called & apply d 'true'& set the style to line-through 
