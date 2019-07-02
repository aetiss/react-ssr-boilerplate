import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import { Link } from "react-router-dom";

class collections extends Component {
  constructor() {
    super();
    this.products = [
      {
        id: 1,
        name: "Ray Ban 252",
        price: 599,
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/sample-poc-350b1.appspot.com/o/product_image_2.webp?alt=media&token=f2403357-ea51-4464-aee9-d7d0312b85da",
        description: "This is Ray Ban Eye Glass"
      },
      {
        id: 2,
        name: "Titan Glass",
        price: 699,
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/sample-poc-350b1.appspot.com/o/product_image_3.webp?alt=media&token=1e3bb973-381b-406a-93ff-6264fffd6f76",
        description: "This is Titan Glass"
      },
      {
        id: 3,
        name: "Lombard",
        price: 799,
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/sample-poc-350b1.appspot.com/o/product_image_1.webp?alt=media&token=446c9778-cec4-4268-9edc-04b31d2edfa1",
        description: "This is Lombard Sunglass Glass"
      },
      {
        id: 4,
        name: "Reeve",
        price: 899,
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/sample-poc-350b1.appspot.com/o/product_image_4.webp?alt=media&token=c882dfa5-4fed-48f7-96c0-23260f28c142",
        description: "This is Reeve Eye Glass"
      }
    ];
  }

  render() {
    return (
      <div>
        <AppHeader />
        {/* <TrendingProducts /> */}
        <div className="row">
          <div className="col-3 d-flex justify-content-center" style={{ borderRight: "1px solid #333" }}>
            <h4>Filters</h4>
          </div>
          <div className="col mb-3">
            <div className="row d-flex justify-content-between mx-1">
              {this.products.map((item, index) => {
                return (
                  <Link to={`/products/${item.id}`} className="card" key={item.name} style={{ width: "18rem" }}>
                    <img className="card-img-top" src={item.image_url} alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default collections;
