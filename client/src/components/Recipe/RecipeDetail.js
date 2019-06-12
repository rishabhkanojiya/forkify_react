import React, { Component } from "react";
import { fetchIngre, saveItem } from "../../actions";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

export class RecipeDetail extends Component {
  componentDidUpdate() {
    this.props.fetchIngre(this.props.term);
  }
  render() {
    if (this.props.ingre.ingredients) {
      return (
        <RecipeCard isLoading={this.props.isLoading} ingre={this.props.ingre} />
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    term: state.rID.payload,
    ingre: state.ingre.payload,
    isLoading: state.ingre.isLoading
    // term : state.
  };
};

const mapDispatchToProps = {
  fetchIngre,
  saveItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
