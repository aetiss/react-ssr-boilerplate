import React, { Component } from "react";
import AppHeader from "../../components/AppHeader";
import AppCarousel from "../../components/AppCarousel";
import AppFooter from "../../components/AppFooter";
import TrendingProducts from "../../components/TrendingProducts";
import Collections from "../../components/Collections";
import { connect } from "react-redux";
import { fetchInitialData, fetchTrendingProducts } from "../../actions";
import { Helmet } from "react-helmet";

class Home extends Component {
  componentDidMount() {
    fetchInitialData();
  }

  static initialAction() {
    return fetchInitialData();
  }

  render() {
    console.log("trending Products::", this.props.trendingProducts);
    return (
      <div>
        <Helmet>
          <title>{`RevisionPros SSR POC`}</title>
          <meta property="og:title" content="Home Page" />
        </Helmet>

        <div className="container-fluid">
          <AppHeader />
          <AppCarousel />
          <TrendingProducts trendingProducts={this.props.trendingProducts} />
          <Collections collections={this.props.collections} />
          <AppFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trendingProducts: state.trendingProducts,
  collections: state.collections
});

export default connect(
  mapStateToProps,
  { fetchTrendingProducts }
)(Home);
