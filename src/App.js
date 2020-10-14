import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCandidates } from "./actions";
import { useHistory } from "react-router-dom";

import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import { tableHeaders, checkboxStatus } from "./resources/constants";
import "./App.scss";

const App = ({ data, status, fetchCandidates }) => {
  let history = useHistory();

  const [initialCandidates, setInitialCandidates] = useState(data);
  const [passingFilters, setPassingFilters] = useState({
    search: { inputTerm: "" },
    status: { approved: false, waiting: false, rejected: false }
  });

  useEffect(() => {
    setInitialCandidates(data);
  }, [data]);

  useEffect(() => {
    const params = getParams(history.location);
    const statusArray = params.status.split(",");

    if (params.nameOrPosition !== "") {
      setPassingFilters(prevState => ({
        ...prevState,
        search: { inputTerm: params.nameOrPosition }
      }));
    }

    if (params.status !== "") {
      statusArray.forEach(status => {
        setPassingFilters(prevState => ({
          ...prevState,
          status: { ...prevState.status, [status]: true }
        }));
      });
    }
  }, [history]);

  const getParams = location => {
    const searchParams = new URLSearchParams(location.search);
    return {
      nameOrPosition: searchParams.get("nameOrPosition") || "",
      status: searchParams.get("status") || ""
    };
  };

  const handleInputListener = inputValue => {
    setPassingFilters(prevState => ({
      ...prevState,
      search: { ...prevState.search, inputTerm: inputValue }
    }));
  };

  const handleCheckboxListener = name => {
    setPassingFilters(prevState => ({
      ...prevState,
      status: {
        ...prevState.status,
        [name]: !prevState.status[name]
      }
    }));
  };

  const searchCandidates = () => {
    const filteredCandidates = handleMultiFilters(data, filteredCollected());

    const checkboxesSelected = filteredCollected();
    if (passingFilters.search.inputTerm !== "" || checkboxesSelected.status.length !== 0) {
      history.push({
        pathname: "/",
        search: `?nameOrPosition=${passingFilters.search.inputTerm}&status=${checkboxesSelected.status}`
      });
    } else {
      history.push({
        pathname: "/",
        search: ""
      });
    }
    return filteredCandidates.filter(candidate => {
      return (
        candidate.name.toLowerCase().includes(passingFilters.search.inputTerm) ||
        candidate.position_applied.toLowerCase().includes(passingFilters.search.inputTerm)
      );
    });
  };

  const filteredCollected = () => {
    const collectedTrueKeys = {
      status: []
    };
    const { status } = passingFilters;
    for (let statusKey in status) {
      if (status[statusKey]) {
        collectedTrueKeys.status.push(statusKey);
      }
    }
    return collectedTrueKeys;
  };

  const handleMultiFilters = (candidates, filters) => {
    const filterKeys = Object.keys(filters);
    return candidates.filter(candidate => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        if (Array.isArray(candidate[key])) {
          return candidate[key].some(keyEle => filters[key].includes(keyEle));
        }
        return filters[key].includes(candidate[key]);
      });
    });
  };

  return (
    <div className="app">
      <h1 className="title">Candidates</h1>
      <div className="actions-group">
        <SearchBar handleInput={handleInputListener} />
        <CheckboxGroup checkboxData={checkboxStatus} handleCheckbox={handleCheckboxListener} />
      </div>
      {status === "error" && <ErrorModal handleError={fetchCandidates} />}
      <Table headers={tableHeaders} data={initialCandidates !== undefined ? searchCandidates() : []} status={status} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.getCandidates.candidates,
    status: state.getCandidates.status
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchCandidates: () => dispatch(fetchCandidates()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
