import React, { Component } from "react";

export class RecipeSave extends Component {
  render() {
    return (
      <div>
        <div className="ui list">
          <div className="item">
            <div className="ui divided grid">
              <div className=" row">
                <div className="eight wide column">
                  <div className="ui form">
                    <div className="required field">
                      <input type="text" placeholder="0.3 gm" />
                    </div>
                  </div>
                </div>
                <div
                  className="eight wide column "
                  style={{ padding: "9px 10px" }}
                >
                  <h4>salt</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeSave;
