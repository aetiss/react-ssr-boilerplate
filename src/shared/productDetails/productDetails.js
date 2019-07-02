import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

class productDetails extends Component {
  constructor(props) {
    super(props);
    this.trendingProducts = [
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
