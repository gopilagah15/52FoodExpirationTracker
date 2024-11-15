import React from "react";

const MonthlySummary = ({ wastedItems }) => {
  return (
    <div>
      <h2>Monthly Summary</h2>
      <p>Wasted Items: {wastedItems.length}</p>
      <ul>
        {wastedItems.map((item, index) => (
          <li key={index}>
            {item.name} - Expired on {item.expirationDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlySummary;
