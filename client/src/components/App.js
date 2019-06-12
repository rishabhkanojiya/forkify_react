import React, { Component } from "react";
import RecipeDetail from "./Recipe/RecipeDetail";
import RecipeList from "./Recipe/RecipeList";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import SavedRecipe from "./Recipe/SavedRecipe";
import RecipeCard from "./Recipe/RecipeCard";

export class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <div
                className="ui grid stackable container divided"
                style={{ padding: "30px" }}
              >
                <div className="row">
                  <div className="six wide computer six wide mobile column">
                    <RecipeList />
                  </div>

                  <div className="ten wide computer six wide mobile column">
                    <RecipeDetail />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/recipe/saved" exact component={SavedRecipe} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
