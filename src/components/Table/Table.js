import React, { useState } from "react";
import HeaderTable from "../HeaderTable/HeaderTable";
import RowTable from "../RowTable/RowTable";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./Table.scss";

const Table = ({ headers, data, status }) => {
  let sortedData = data;
  const [sortConfig, setSortConfig] = useState(null);

  const handleSortHeader = header => {
    setSortConfig(header);
  };

  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const loadingSpinner = (
    <tr>
      <td colSpan="8">
        <LoadingSpinner />
      </td>
    </tr>
  );

  return (
    <table className="table">
      <HeaderTable headerData={headers} handleSortHeader={handleSortHeader} />
      <tbody>
        {status === "loading"
          ? loadingSpinner
          : sortedData.map(rowData => {
              return <RowTable key={rowData.id} rowData={rowData} />;
            })}
      </tbody>
    </table>
  );
};

export default Table;
