import React from "react";
import "./RowTable.scss";

const RowTable = ({ rowData }) => {
  const birthDate = new Date(rowData.birth_date);
  const applicationDate = new Date(rowData.application_date);
  const birthDataFormatted = new Intl.DateTimeFormat().format(birthDate);
  const applicationDateFormatted = new Intl.DateTimeFormat().format(applicationDate);

  let statusStyleVariant;
  if (rowData.status === "approved") {
    statusStyleVariant = "-green";
  } else if (rowData.status === "waiting") {
    statusStyleVariant = "-yellow";
  } else {
    statusStyleVariant = "-red";
  }

  return (
    <tr className="row-data">
      <td>{rowData.id}</td>
      <td>{rowData.name}</td>
      <td>{rowData.email}</td>
      <td className="-center">{birthDataFormatted}</td>
      <td className="-center">{rowData.year_of_experience}</td>
      <td className="-center">{rowData.position_applied}</td>
      <td className="-center">{applicationDateFormatted}</td>
      <td>
        <div className={`row-status ${statusStyleVariant}`}>
          <label> {rowData.status}</label>
        </div>
      </td>
    </tr>
  );
};

export default RowTable;
