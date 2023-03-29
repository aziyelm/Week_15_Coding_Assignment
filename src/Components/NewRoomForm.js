import React, { useState } from "react";

export const NewRoomForm = (props) => {
  //set state
  const [name, setName] = useState(""); //empty string
  const [area, setArea] = useState(undefined); //undefined number

  //method to ensure the input is a number
  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10); //target value rounded to the 10th
    setArea(int >= 0 ? int : ""); //is the number >=0? then pass in the number. else pass in an empty string
  };

  //method to handle submission
  const onSubmit = (e) => {
    e.preventDefault(); //prevent refreshing page
    if (name && area) {
      //if name and area are true
      props.addNewRoom({ name, area }); //call addNewRoom method which adds inputted name and area

      //set input back to empty strings
      setName("");
      setArea("");
    } else {
      console.log("Invalid input");
    }
  };

  return (
    <div>
      <h4>Add a new room</h4>
      <form onSubmit={onSubmit}>
        {/* input for name, set value of name to user input */}
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />{" "}
        {/* input for area, set value of area to user input */}
        <input
          type="text"
          placeholder="Area"
          onChange={handleAreaInput}
          value={area}
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};
