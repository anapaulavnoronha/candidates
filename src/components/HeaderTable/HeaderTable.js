import React, { useState } from "react";
import "./HeaderTable.scss";

const HeaderTable = ({ headerData, handleSortHeader }) => {
  const [sortedHeader, setSortedHeader] = useState({
    key: "id",
    direction: "ascending"
  });

  const handleSort = header => {
    const sortDirection = sortedHeader.direction === "descending" ? "ascending" : "descending";
    setSortedHeader({ key: header.label, direction: sortDirection });
    handleSortHeader({ key: header.label, direction: sortDirection });
  };

  return (
    <thead className="header-table">
      <tr>
        {headerData.map(header => {
          return (
            <th key={header.label} className="header">
              <div className="header-container">
                {header.sortable ? (
                  <div className="header-sortable">
                    <label>{header.content}</label>
                    <button
                      className={`sort-icon ${header.label === sortedHeader.key ? `-${sortedHeader.direction}` : ""}`}
                      onClick={() => handleSort(header)}
                    ></button>
                  </div>
                ) : (
                  <div
                    className={`header-regular ${
                      header.label === "birth_date" || header.label === "status" ? "-center" : ""
                    }`}
                  >
                    <label>{header.content}</label>
                  </div>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default HeaderTable;
