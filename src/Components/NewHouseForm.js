import { housesApi } from "../Rest/HousesApi";

export const NewHouseForm = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("create-house").value;
    housesApi.create({ name: name, rooms: [] }); //create house from user input
    props.fetchHouses(); 
    document.getElementById("create-house").value = ""; //set back to empty string
  };

  return (
    <div>
      <div>
        {" "}
        <h1>Add a New House</h1>{" "}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="New House" id="create-house"></input>
          <button type="submit">Create New House</button>
        </form>
      </div>
    </div>
  );
};
