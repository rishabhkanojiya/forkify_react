import React, { Component } from "react";
import { fetchIngre } from "../../actions";
import { connect } from "react-redux";

export class RecipeDetail extends Component {
  componentDidUpdate() {
    this.props.fetchIngre(this.props.term);
  }

  renderIngreList = ingre => {};

  renderDetail = ({
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
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Activity</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a>Helen Troy</a> added two pictures
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon" />
            22 Friends
          </a>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderDetail(this.props.ingre)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    term: state.rID.payload,
    ingre: state.ingre
    // term : state.
  };
};

const mapDispatchToProps = {
  fetchIngre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
