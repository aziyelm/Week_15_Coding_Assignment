// Coding Steps:
// Using the Houses API, create a single page that allows for all 4 CRUD operations to be performed on a resource from the API. 
// Create a React component to represent the resource. 
// Make all forms and other necessary UI pieces their own components as reasonable.

//Logic to make a network call for the houses endpoint
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

//regular class to house methods with fetch calls/https requests
class HousesApi {
  //READ: GET REQUEST
  get = async () => {
    try {
      //code wrapped in try catch block in case there are errors
      const resp = await fetch(HOUSES_ENDPOINT); //get data from server
      const data = await resp.json(); //turn data into json
      return data; //return data
    } catch (e) {
      //e is error
      console.log("Oops, looks like fetchHouses had an issue.", e); //error message
    }
  };

  //UPDATE: PUT REQUEST
  put = async (house) => {
    try {
      ///get data from server and the ids, return the data as strings
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (e) {
      //error handling
      console.log("Oops, looks like updating houses had an issue.", e);
    }
  };

  //CREATE: POST REQUEST
  create = async (house) => {
    try {
      const response = await fetch(HOUSES_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return response;
    } catch (e) {
      console.log("error creating house", e);
    }
  };

  //DELETE: DELETE REQUEST
  delete = async (_id) => {
    try {
      const response = await fetch(`${HOUSES_ENDPOINT}/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error deleting house", e);
    }
  };
}

export const housesApi = new HousesApi();
