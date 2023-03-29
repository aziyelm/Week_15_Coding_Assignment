import React from "react";
import { NewRoomForm } from "./NewRoomForm";

export const House = (props) => {
  const { house, updateHouse, deleteHouse } = props;

  //method to delete room
  const deleteRoom = (roomId) => {
    console.log(roomId);
    const updatedHouse = {
      ...house, //spread out house values
      rooms: house.rooms.filter((x) => x._id !== roomId), //update rooms. return an array with all values except the value asosciated with roomId
    };
    updateHouse(updatedHouse); //update server
  };

  //method to add room
  const addNewRoom = (room) =>
    updateHouse({ ...house, rooms: [...house.rooms, room] }); //return house data and room data + new room
  //return not needed bc code is a single line

  //method to format rooms as a list with a delete room button
  const rooms = () => (
    <ul>
      {/* map over rooms and return the data and delete button */}
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label>{`${room.name} Area: ${room.area}`}</label>
          <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  //method to delete House
  const deleteClick = (e) => {
    deleteHouse(house._id);
  };

  return (
    <div>
      <h2>{house.name}</h2>
      <button className="btn btn-danger" onClick={deleteClick}>
        Delete House
      </button>
      {/* list of rooms (name and area) with delete room button */}
      {rooms({ rooms, houseId: house._id, deleteRoom })} {/* rooms({props}) */}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
