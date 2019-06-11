import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetTerm } from "../actions";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.myRefs = React.createRef();
  }
  searchResults = Values => {
    this.props.GetTerm(Values);

    // console.log(Values);
  };

  render() {
    return (
      <div>
        <div className="ui secondary  menu" style={{ padding: "10px 0" }}>
          <Link to="/" className="item ">
            Home
          </Link>
          <Link to="recipe/saved" className="item">
            Saved
          </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <div className="ui form">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.searchResults(this.myRefs.value);
                    }}
                  >
                    <input
                      type="text"
                      ref={e => {
                        this.myRefs = e;
                      }}
                      placeholder="Search..."
                    />
                  </form>
                </div>

                <i className="search link icon" />
              </div>
            </div>
            <a className="ui item">
              <button className="ui button red">Log In</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.TERM.payload);
};

const mapDispatchToProps = {
  GetTerm
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
