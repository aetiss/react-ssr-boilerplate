import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import { Link } from "react-router-dom";
import products from "../../Data/products";
import { Helmet } from "react-helmet";

class collections extends Component {
  constructor() {
    super();
    this.products = products;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`RevisionPros SSR POC - Collections`}</title>
          <meta property="og:title" content="Collections Page" />
        </Helmet>
        <AppHeader />
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
