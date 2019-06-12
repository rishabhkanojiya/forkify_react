import React, { Component } from "react";
import { saveItem } from "../../actions";
import { connect } from "react-redux";

export class RecipeDetail extends Component {
  parseIngredients(ingredients) {
    const uniLong = [
      "teaspoons",
      "teaspoon",
      "ounces",
      "ounce",
      "tablespoons",
      "tablespoon",
      "cups",
      "pounds"
    ];

    const uniShort = ["tsp", "tsp", "oz", "oz", "tbsp", "tbsp", "cup", "pound"];
    const units = [...uniShort, "kg", "g"];

    const newIngredients = ingredients.map(el => {
      let ingredient = el.toLowerCase();

      uniLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, uniShort[i]);
      });
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex(el2 => {
        return units.includes(el2);
      });

      let objIng;

      if (unitIndex > -1) {
        const arrCount = arrIng.slice(0, unitIndex);

        let count;
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace("-", "+"));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join("+"));
        }
        objIng = {
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" ")
        };
      } else if (parseInt(arrIng[0], 10)) {
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" ")
        };
      } else if (unitIndex === -1) {
        objIng = {
          count: 1,
          unit: "",
          ingredient
        };
      }

      return objIng;
    });

    return newIngredients;
  }

  renderIngreList = ingredients => {
    return ingredients.map(({ count, unit, ingredient }, i) => {
      return (
        <tr key={i}>
          <td className="column">{count}</td>
          <td className="column">{unit}</td>
          <td className="column">{ingredient}</td>
        </tr>
      );
    });
  };

  renderIngreDetail = ({
    publisher,
    image_url,
    publisher_url,
    recipe_id,
    title,
    ingredients
  }) => {
    return (
      <div className="ui fluid card" key={recipe_id}>
        <div className=" image">
          <img
            className="ui fluid image"
            src={image_url}
            style={{ height: "400px", backgroundSize: "cover" }}
          />
        </div>
        <div className="content">
          <a className="header">{title}</a>
          <div className="meta">
            <span className="date">{publisher}</span>
          </div>
        </div>
        <h4 className="ui horizontal divider header">
          <i className="bar chart icon" />
          INGREDIENTS
        </h4>
        <table className="ui  compact divided table">
          <tbody>
            {this.renderIngreList(this.parseIngredients(ingredients))}
          </tbody>
        </table>
        <div className="ui horizontal divider header">
          <button
            id={recipe_id}
            className="ui primary button"
            onClick={e => {
              this.props.saveItem(e.target.id);
            }}
          >
            Save
          </button>
        </div>
        <div className="extra content">
          <a href={publisher_url} target="_blank" rel="noopener noreferrer">
            <i className="user icon" />
            {publisher_url}
          </a>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div className="ui cards">
          <div className="ui fluid card">
            <div className=" image">
              <div className="ui placeholder">
                <div className="square  image" />
              </div>
            </div>
            <div className="content">
              <div className="ui placeholder">
                <div className="header">
                  <div className="very short line" />
                  <div className="medium line" />
                </div>
                <div className="paragraph">
                  <div className="short line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.ingre.ingredients) {
      return <div>{this.renderIngreDetail(this.props.ingre)}</div>;
    }
    return <div />;
  }
}

// const mapStateToProps = state => {
//   return {
//     term: state.rID.payload,
//     ingre: state.ingre.payload,
//     isLoading: state.ingre.isLoading
//     // term : state.
//   };
// };

const mapDispatchToProps = {
  saveItem
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeDetail);
