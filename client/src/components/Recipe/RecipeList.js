import React, { Component } from "react";
import { fetchIngre, fetchRecipe, fetchId } from "../../actions";
import { connect } from "react-redux";

export class RecipeList extends Component {
  componentDidUpdate() {
    this.props.fetchRecipe(this.props.term);
  }

  limitStr = (title, limit = 30) => {
    if (title.length > limit) {
      const trstr = title.substring(0, limit);
      return `${trstr} ...`;
    }
    return title;
  };

  renderList = recipes => {
    return recipes.map(({ publisher, image_url, recipe_id, title }) => {
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
              <img src={image_url} style={{ height: "50px", width: "50px" }} />
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
    });
  };
  render() {
    if (this.props.isLoading) {
      return (
        <div className="ui placeholder">
          <div className="image header">
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      );
    }

    return <div>{this.renderList(this.props.recipes.slice(0, 10))}</div>;
  }
}

const mapStateToProps = state => {
  return {
    term: state.term.payload,
    recipes: Object.values(state.recipe.payload),
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
