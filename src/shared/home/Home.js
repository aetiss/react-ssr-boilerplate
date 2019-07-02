import React, { Component } from "react";
import { Link } from "react-router-dom";

import AppHeader from "../components/AppHeader";
import AppCarousel from "../components/AppCarousel";
import AppFooter from "../components/AppFooter";
import TrendingProducts from "../components/TrendingProducts";
import Collections from "../components/Collections";

// import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    let trendingProducts, collections;
    if (props.staticContext) {
      console.log("Props :::: ", props.staticContext);
      trendingProducts = props.staticContext.initialData.trendingProducts;
      collections = props.staticContext.initialData.collections;
    } else {
      trendingProducts = window.__initialData__.trendingProducts;
      collections = window.__initialData__.collections;
    }
    this.state = { trendingProducts, collections };
    console.log("Home state ::: ", this.state);
  }

  componentDidMount() {
    if (!this.state.trendingProducts) {
      var trendingProducts = Home.requestInitialData();
      this.setState({ trendingProducts });
    }
    if (!this.state.collections) {
      var collections = Home.requestInitialCollections();
      this.setState({ collections });
    }
  }

  static requestInitialData() {
    return {
      trendingProducts: [
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
      ],

      collections: [
        {
          id: 1,
          name: "Sunglasses",
          image_url:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
          description: "This is collection of sunglasses"
        },
        {
          id: 2,
          name: "Eyewears",
          image_url:
            "https://images.unsplash.com/photo-1546180245-c59500ad14d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
          description: "This is collection of eyewears"
        },
        {
          id: 3,
          name: "Beach Glasses",
          image_url:
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80",
          description: "This is collection of Beach Glasses"
        },
        {
          id: 4,
          name: "Study Glasses",
          image_url:
            "https://images.unsplash.com/photo-1539126190438-008b15923601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          description: "This is collection of Study Glasses"
        }
      ]
    };
  }

  render() {
    console.log("trendin Products::", this.state.trendingProducts);
    return (
      <div className="container-fluid">
        <AppHeader />
        <AppCarousel />
        <TrendingProducts trendingProducts={this.state.trendingProducts} />
        <Collections collections={this.state.collections} />
        <AppFooter />
      </div>
    );
  }
}

export default Home;
