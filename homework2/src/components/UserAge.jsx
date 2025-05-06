import React from "react";

export const UserAge = (props) => {
  return (
    
      <div id="user-age">
        <h2>User older than 18:</h2>
        {props.user.map((userDetails, i) => (
          userDetails.age >= 18 ?
          <li key={i}>{userDetails.firstName} {userDetails.lastName}</li>
          :
          null
        ))}
      </div>
    
  );
};
