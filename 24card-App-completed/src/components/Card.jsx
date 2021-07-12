import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */} {/*convert this to a component */}
        <Avatar imgavatar={props.img} />  {/* is transfering its props.img to Avatar */}
      </div>

      <div className="bottom">
   {/* <p className="info">{props.tel}</p>;
   <p className="info">{props.email}</p>; */}
{/* convert the above to a detail-component */}
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
