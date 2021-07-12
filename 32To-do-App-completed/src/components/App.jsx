//CHALLENGE: 
//Your job is to make the app work as it did before but this time with the InputArea as a seperate Component.
// DO NOT Modify the ToDoItem.jsx

/////////
// DO NOT put the input/button elements into the App.jsx i.e
//move inputText/setInputText & handleChange-fxn into inputArea component  becos its a section of its own
//but cant move addItem-fxn though its heeded in inputArea becos what it 'returns' is been used here e.g prevItems/items
//Hint 1: You will need to think about how to manage the state of the input element inside InputArea.jsx.
//Hint 2: You will need to think about how to pass the input value back into the addItem() function in App.jsx.


import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  
  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }

  function addItem(inputText) { //usually setItems has acess to prevoius Items &replaces the prevoius item,but  here it retains it 
    setItems(prevItems => {
      return [...prevItems, inputText]; //puts it in the items inside the <ul> & map thru it
    });
  }

  function deleteItem(id) { //id of the item that is clicked
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;  //return all other items
      });
    });
  }

  return (
    <div className="container">
      <div className="heading"><h1>To-Do List</h1></div>
      <InputArea onAdd={addItem} /> {/* inputArea or form */}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
