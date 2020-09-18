import { combineReducers } from "redux";
import { RECEIVE_CANDIDATES, LOADING_TYPE, FAILURE_TYPE } from "../actions";

function getCandidates(state = { candidates: [], status: null }, action) {
  switch (action.type) {
    case RECEIVE_CANDIDATES:
      return { ...state, candidates: action.candidates, status: "success" };
    case LOADING_TYPE:
      return { ...state, status: "loading" };
    case FAILURE_TYPE:
      return { ...state, status: "error" };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ getCandidates });

export default rootReducer;
