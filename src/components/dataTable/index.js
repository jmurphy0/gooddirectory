import React from "react";
// importing MDBD datatable for ease of sorting and searching
import { MDBDataTable } from "mdbreact";

const DataTable = (props) => {
  // the const data will assign MDBDataTable an object of column and row data
  const data = {
    // defining what the columns will be
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        searchable: "true",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
      },
      {
        label: "Phone",
        field: "phone",
        sort: "disabled",
      },
      {
        label: "Cell",
        field: "cell",
        sort: "asc",
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
        sort: "asc",
      },
      {
        label: "Img",
        field: "img",
        sort: "disabled",
      },
    ],
    // setting the rows equal to the properties passed in empData
    rows: props.employees,
  };
  console.log("props", props.employees);
  console.log("data", data);
  // returning our data table with sorting and search functions built in
  return (
    <MDBDataTable
      searchtop="true"
      //searchBottom="false"
      responsive
      striped
      hover
      sorting="true"
      bordered
      data={data}
      info={true}
    />
  );
};

export default DataTable;
