import React from "react";
import { UserAge } from "./components/UserAge";
import { Address } from "./components/Address";

const user = [
  {
    firstName: "Evgenija",
    lastName: "Puleva",
    address: "Ohrid",
    age: 24,
  },

  {
    firstName: "Katerina",
    lastName: "Conevska",
    address: "Skopje",
    age: 37,
  },

  {
    firstName: "Kiril",
    lastName: "Stolevski",
    address: "Skopje",
    age: 12,
  },

  {
    firstName: "Toni",
    lastName: "Konev",
    address: "Prilep",
    age: 17,
  },
];

export function App() {
  return (
    <div id="app">
      <h1>App Users</h1>
      <UserAge user={user} />
      <br />
      <h2>Users less than 18</h2>
      <p>
        {user.map((userDetails, i) =>
          userDetails.age < 18 ? (
            <p key={i}>
              {userDetails.firstName} {userDetails.lastName}
            </p>
          ) : null
        )}
      </p>
      <br/>
      <hr />
      <br />
      <Address user={user}/>

    </div>
  );
}
