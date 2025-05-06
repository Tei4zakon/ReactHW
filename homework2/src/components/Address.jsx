import React from "react";

export const Address = (props) => {
  return (
    
      <div id="user-address">
        <h3>Users coming from Skopje:</h3>
        {props.user.map(
        (userDetails, i) => (
            userDetails.address == "Skopje" ? 
                <li key={i}>
                {userDetails.firstName} {userDetails.lastName}
                </li>
          : null
        ))}
    </div>
   
  );
};
