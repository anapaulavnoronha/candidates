export const RECEIVE_CANDIDATES = "RECEIVE_CANDIDATES";
export const LOADING_TYPE = "LOADING_TYPE";
export const FAILURE_TYPE = "FAILURE_TYPE";

export function receiveCandidates(json) {
  const candidates = json;
  return {
    type: RECEIVE_CANDIDATES,
    candidates
  };
}

function fetchCandidatesJson() {
  return fetch("http://personio-fe-test.herokuapp.com/api/v1/candidates").then(response => response.json());
}

export function fetchCandidates() {
  return function(dispatch) {
    dispatch({ type: LOADING_TYPE });
    return fetchCandidatesJson().then(json => {
      if (json.error && json.error.code === 500) {
        return dispatch({ type: FAILURE_TYPE });
      } else {
        return dispatch(receiveCandidates(json));
      }
    });
  };
}
