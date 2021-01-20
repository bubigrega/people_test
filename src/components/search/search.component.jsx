import React from "react";

export const Search = ({ handleChange }) => {
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="People"
        onChange={handleChange}
      />
    </div>
  );
};
