import React, { useState, useEffect } from "react";
import "./CheckboxGroup.scss";

const CheckboxGroup = ({ checkboxData, handleCheckbox }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  useEffect(() => {
    setSelectedCheckbox(
      checkboxData.map(item => {
        return { select: false, id: item.id, name: item.name };
      })
    );
  }, [checkboxData]);

  return (
    <div className="checkbox-group">
      <label>Status:</label>
      {selectedCheckbox.map(selector => (
        <div key={selector.id} className="checkbox-container">
          <input
            type="checkbox"
            checked={selector.select}
            className={`${selector.select && "-checked"}`}
            onClick={() => handleCheckbox(selector.name)}
            onChange={e => {
              let checked = e.target.checked;
              setSelectedCheckbox(
                selectedCheckbox.map(item => {
                  selector.id === item.id && (item.select = checked);
                  return item;
                })
              );
            }}
          />
          <label>{selector.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
