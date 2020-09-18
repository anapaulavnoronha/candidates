import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import { fetchCandidates } from "./actions";

import Header from "./components/Header/Header";
import App from "./App";
import "./assets/styles/style.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchCandidates());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
