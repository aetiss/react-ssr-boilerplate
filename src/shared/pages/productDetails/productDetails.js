import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import trendingProducts from "../../Data/products";

class productDetails extends Component {
  constructor(props) {
    super(props);
    this.trendingProducts = trendingProducts;

    this.state = {
      product: ""
    };
  }

  async componentDidMount() {
    console.log("location::", this.props.match.params.id);
    let id = this.props.match.params.id;

    let product = await this.trendingProducts.filter(item => item.id == id);
    console.log("product::", product[0]);
    this.setState({
      product: product[0]
    });
    console.log(this.state.product);
  }

  render() {
    return (
      <div>
        <AppHeader />

        <div className="container row d-flex justify-content-between mt-5">
          <div className="col-7 d-flex justify-content-center">
            <div className="card " style={{ width: "24rem" }}>
              <img className="card-img-top" src={this.state.product.image_url} alt="Card image cap" />
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <h3>{this.state.product.name}</h3>
            </div>
            <hr />
            <div className="row text-muted">
              <h3>{this.state.product.description}</h3>
            </div>
            <div className="row justify-content-between align-items-end mt-5">
              <h4>Price: ${this.state.product.price}</h4>
            </div>
            <div className="row justify-content-between align-items-end mt-5">
              <button type="button" className="btn btn-primary">
                BUY NOW!
              </button>
              <button type="button" className="btn btn-warning">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default productDetails;
