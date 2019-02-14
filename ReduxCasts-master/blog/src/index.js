import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";
import Restaurants from "./components/restaurants";
import Foods from "./components/foods";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <CookiesProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={Foods} />
            <Route path="/" component={Restaurants} />
          </Switch>
        </div>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.querySelector(".container")
);
