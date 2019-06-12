import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
import { fetchSaveIngre } from "../../actions";

export class SavedRecipe extends Component {
  componentDidMount() {
    // console.log(this.props.saveId.payload);
    this.props.fetchSaveIngre(this.props.saveId.payload);
  }
  render() {
    return (
      <div>
        <h4 className="ui horizontal divider header">
          <i className="bar chart icon" />
          Saved
        </h4>
        <div className="ui grid container">
          <div className="three column row">
            <div className="column">
              <RecipeCard
                isLoading={this.props.isLoading}
                ingre={this.props.ingre}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveId: state.savID,
    ingre: state.saveIngre.payload,
    isLoading: state.saveIngre.isLoading
  };
};

const mapDispatchToProps = {
  fetchSaveIngre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedRecipe);
