/////////
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <div className="card">
        <div className="top">
          <h2>Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"/>
        </div>

        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2>Jack Bauer</h2>
          <img
            src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
            alt="avatar_img"/>
        </div>

        <div className="bottom">
          <p>+7387384587</p>
          <p>jack@nowhere.com</p>
        </div>
      </div>

      <div className="card">
        <div className="top">
          <h2>Chuck Norris</h2>
          <img
            src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
            alt="avatar_img"/>
        </div>
        <div className="bottom">
          <p>+918 372 574</p>
          <p>"gmail@chucknorris.com</p>
        </div>
      </div>

    </div>
  );
}

export default App;


//////////////
import React from "react";
import ReactDOM from "react-dom";

//Make one sample of similar set of div into a component
//enter props.xxx for part that area changing repeatedly
//using data from html(above) extract card component(<card />) & move it to card.js
function Card(props) {
  return (
        <div className="card">
            <div className="top">
              <h2>{props.name}</h2>
              <img src={props.img} alt="avatar_img" /> 
            </div>
            <div className="bottom">
              <p>{props.tel}</p>
              <p>{props.email}</p>
            </div>    
    </div>
  );
}
// Note: u can not put name,img.tel.email into { } becos card-component has not been moved to card.jsx
//you can not continue to itemize card becos you have the data already stored in contacts.js
//testing this with react.dom render
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />

<Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />

  </div>,
  document.getElementById("root")
);


//////////////BETTER WAY -using data from contact-folder
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// Note: u can now put name,img.tel.email into { } becos card-component has been moved to card.js & also contacts.js imported   
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;


////////////
import React from "react";
import Card from "./Card"; //component
import contacts from "../contacts"; //datastore

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
  
  function App() { 
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

    </div>
  );
}

export default App;



////////////FINAL COMPLETED
import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// function createCard(contact) {
//   return (
//     <Card
//       id={contact.id}
//       key={contact.id}
//       name={contact.name}
//       img={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// }
  
  function App() { 
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* {contacts.map(createCard)} */}
      {contacts.map(contact => {
            return (
              <Card
                id={contact.id}
                key={contact.id}
                name={contact.name}
                img={contact.imgURL}
                tel={contact.phone}
                email={contact.email}
              />
            );
          })
          }
    </div>
  );
}

export default App;


