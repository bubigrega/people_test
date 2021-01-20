import React from "react";
import { Card } from "../card/card_component";
import "./card_list.styles.css";

export const CardList = ({ people }) => {
  return (
    <div className="card-list">
      {people.map((person, idx) => (
        <Card key={person.email} {...person} idx={idx + 1} />
      ))}
    </div>
  );
};
