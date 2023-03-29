import React from "react";
import { House } from "./House";
import { housesApi } from "../Rest/HousesApi";
import { NewHouseForm } from "./NewHouseForm";

export class HousesList extends React.Component {
  state = {
    houses: [], //set houses as an array
  };

  //CRUD fxs
  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await housesApi.get(); //using get method from housesApi to get data from server
    this.setState({ houses }); //set houses data as an array
  };

  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse); //using put method from housesApi
    this.fetchHouses(); //get data from server
  };

  createHouse = async (newHouse) => {
    await housesApi.create(newHouse);
    this.fetchHouses();
    document.getElementById("create-house").value = "";
  };

  deleteHouse = async (_id) => {
    await housesApi.delete(_id);
    this.fetchHouses();
  };

  render() {
    return (
      <div className="house-list">
        <NewHouseForm fetchHouses={this.fetchHouses} />
        {/* map over houses array and return House component*/}
        {this.state.houses.map((house) => (
          <House house={house} key={house._id} updateHouse={this.updateHouse} deleteHouse={this.deleteHouse}/>
        ))}
      </div>
    );
  }
}
