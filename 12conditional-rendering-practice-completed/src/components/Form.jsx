import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      
      {/* CHECKING WHEATHER IS REGISTERED */}
      {/* <input type="password" placeholder="Password" /> */}
      {!props.isRegistered && ( <input type="password" placeholder="Confirm Password" />)}
      {/* OR  */}
      {/* {props.isRegistered === false ? ( <input type="password" placeholder="Confirm Password" />) : null} */}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button> 
      {/* here the isRegistered? is checking wheather reqistered so it can now show Login or register */}
    </form>
  );
}

export default Form;
