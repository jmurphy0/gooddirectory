import axios from "axios";
import React from "react";
import DataTable from "../dataTable";

export default class Emp extends React.Component {
  // initializing the state for the rempres (employee data response)
  state = {
    empres: [],
  };
  // calling the axios get method to retrieve the API data
  componentDidMount = () => {
    axios.get("https://randomuser.me/api?results=100").then((empdata) => {
      const edata = empdata.data.results;
      let emprec = [];
      for (let i = 0; i < edata.length; i++) {
        const user = edata[i];
        let info = {
          name: user.name.first + " " + user.name.last,
          email: user.email,
          age: user.dob.age,
          phone: user.phone,
          cell: user.cell,
          city: user.location.city,
          country: user.location.country,

          img: (
            <img
              src={user.picture.thumbnail}
              alt={user.name.first + "profile pic unavailable"}
            />
          ),
        };
        //pushing individual employee data to the temperary array
        emprec.push(info);
      }
      // setting the state equal to the temperary array
      this.setState({ empres: emprec });
    });
  };
  // returns the table filled with employee data
  render() {
    return <DataTable employees={this.state.empres} />;
  }
}
