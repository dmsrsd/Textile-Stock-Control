import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: " product_id",
    text: "Product ID",
  },
  {
    dataField: "productDescription",
    text: "Product Description",
  },
  {
    dataField: " product_stock",
    text: "Product Stock",
  },
  {
    dataField: "items",
    text: "Items",
  },
];

const TableComponent = (props) => {
  return (
    <BootstrapTable keyField="id" data={props.proformaItem} columns={columns} />
  );
};

export default TableComponent;
