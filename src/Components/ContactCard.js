import React from "react";
import user from "../images/user.png";
function CardContact(props) {
    const{id,name,email}=props.contact
  return (
    <div className="item" key={id}>
        <img className="ui avatar image" src={user} alt="user "></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon delete-icon" style={{color:"red",marginTop:"7px"}}></i>
    </div>
  );
}

export default CardContact;
  