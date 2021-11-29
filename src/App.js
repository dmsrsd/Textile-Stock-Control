import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import "./App.css";
import { Container } from "reactstrap";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: [],
      myLocation: [],
    };
  }

  componentDidMount() {
    const urlFetch = fetch("https://dmsrsd.github.io/jsonapi/data.json");

    urlFetch
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        this.setState({
          myData: resJson.proformaItem,
          myLocation: resJson.location,
        });
      });
  }

  renderTableHeader = () => {
    const locations = this.state.myLocation;
    if (!locations) return "NO DATA";

    return locations.map((data, index) => {
      return (
        <>
          <th key={index}>{data.name}</th>
        </>
      );
    });
  };

  renderDetailProduct = () => {
    const locations = this.state.myLocation;
    const detailData = this.state.myData;
    // console.log("Detail Data", detailData);

    if (!detailData) return "NO DATA";

    return detailData.map((myProduct, index) => {
      const { product_id, productDescription, categoryDescription } = myProduct;

      //DISPLAY STOCK BASE ON LOCATION ID
      let MyStock = JSON.parse(myProduct.product_stock);
      if (!MyStock) return "NO DATA";

      const quantityStock = new Array(locations.length).fill(0);

      MyStock.map((dataStock, idxStock) => {
        let cityIndex = locations.findIndex(
          (objCity) => objCity.id === parseInt(Object.keys(dataStock)[0])
        );
        quantityStock[cityIndex] = Object.values(dataStock)[0];
        // console.log("Cek Data", locations);
      });
      const renderStock = quantityStock.map((dataRender, idxRender) => {
        return <td key={idxRender}>{dataRender}</td>;
      });

      const diffSize = locations.length - renderStock.length;

      //HITUNG TOTAL STOCK
      let hitungTotalStock = quantityStock;
      let totalStock = 0;

      for (let i = 0; i < quantityStock.length; i++) {
        // console.log("Cek Array", hitungTotalStock);
        totalStock += quantityStock[i];
      }

      //DISPLAY DETAIL ORDER
      let dataOrder = JSON.parse(myProduct.items);
      if (!dataOrder) return "NO DATA";
      // console.log("Parsing Data Order", dataOrder);

      let MyOrder = 0;
      dataOrder.map((newData, index) => {
        MyOrder += newData.qty;
        // console.log("Mapping Data Order", MyOrder);
      });

      //HITUNG PRESENTASE
      let getDataOrder = MyOrder;
      const presentase = (getDataOrder / totalStock) * 100;
      let persentaseFinal = presentase.toFixed(2);
      // console.log("Presentase", presentase);

      return (
        <tr key={product_id}>
          {renderStock}
          <td>{categoryDescription}</td>
          <td>{productDescription}</td>
          <td>{totalStock}</td>
          <td>{persentaseFinal} %</td>
          <td>{MyOrder}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div style={{ marginBottom: 100 }}>
        <Container>
          <NavbarComponent />
          <h1 id="title"> MY TABLE</h1>
          <table id="myTable">
            <tbody>
              <tr>
                {this.renderTableHeader()}
                <th>Category</th>
                <th>Product</th>
                <th>Total Stock</th>
                <th>Percent %</th>
                <th>Total Order</th>
              </tr>
              {this.renderDetailProduct()}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}
