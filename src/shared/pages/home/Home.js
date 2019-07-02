import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import AppCarousel from "../../components/AppCarousel";
import AppFooter from "../../components/AppFooter";
import TrendingProducts from "../../components/TrendingProducts";
import Collections from "../../components/Collections";
import { connect } from "react-redux";
import { fetchTrendingProducts, fetchCollections, fetchInitialData } from "../../actions";

// import "./Home.css";

class Home extends Component {
  componentDidMount() {
    // if (!this.props.trendingProducts) {
    //   this.props.dispatch(fetchTrendingProducts());
    // }
    // if (!this.props.collections) {
    //   this.props.dispatch(fetchCollections());
    // }

    fetchInitialData();
  }

  static initialAction() {
    //this.props.dispatch(fetchTrendingProducts());
    //this.props.dispatch(fetchCollections());
    // return fetchTrendingProducts();
    return fetchInitialData();
  }

  render() {
    console.log("trending Products::", this.props.trendingProducts);
    return (
      <div className="container-fluid">
        <AppHeader />
        <AppCarousel />
        <TrendingProducts trendingProducts={this.props.trendingProducts} />
        <Collections collections={this.props.collections} />
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trendingProducts: state.trendingProducts,
  collections: state.collections
});

export default connect(mapStateToProps)(Home);
