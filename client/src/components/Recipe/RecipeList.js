import React, { Component } from "react";
import { fetchIngre, fetchRecipe, fetchId } from "../../actions";
import { connect } from "react-redux";

export class RecipeList extends Component {
  componentDidUpdate() {
    this.props.fetchRecipe(this.props.term);
  }
  giveId = () => {
    console.log(this.props.recipes.recipe_id);
  };

  limitStr = (title, limit = 20) => {
    if (title.length > limit) {
      const trstr = title.substring(0, limit);
      return `${trstr} ...`;
    }
    return title;
  };

  renderList = () => {
    return this.props.recipes.map(
      ({ publisher, image_url, recipe_id, title }) => {
        return (
          <div
            className="ui  unstackable divided items"
            onClick={e => {
              this.props.fetchId(e.target.id);
            }}
            key={recipe_id}
          >
            <div className="item">
              <div className="ui mini rounded image">
                <img
                  src={image_url}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="content">
                <h5>
                  <a id={recipe_id}>{this.limitStr(title)}</a>
                </h5>
                <div className="meta">
                  <span>{publisher}</span>
                </div>
                <div className="description">
                  <p />
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  };
  render() {
    if (!this.props.isLoading) {
      return (
        <div class="ui placeholder">
          <div class="image header">
            <div class="line" />
            <div class="line" />
          </div>
        </div>
      );
    }

    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    term: state.term.payload,
    recipes: Object.values(state.recipe),
    isLoading: state.recipe.isLoading
  };
};

const mapDispatchToProps = {
  fetchRecipe,
  fetchId,
  fetchIngre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
