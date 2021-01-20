import React from "react";

import "./card.styles.css";

export const Card = ({ idx, firstname, lastname, email }) => {
  return (
    <div className="card-container">
      <img
        alt="avatar"
        src={`https://robohash.org/${idx}?set=set5&size=200x200`}
      />
      <h2>
        {firstname} {lastname}
      </h2>
      <p>{email}</p>
    </div>
  );
};
