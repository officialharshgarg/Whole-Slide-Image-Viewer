import React from "react";

const StatsPanel = () => {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        borderRight: "1px solid #ccc",
        background: "#f9f9f9",
        color: "black",
      }}
    >
      <h3>RBC</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#ddd", borderBottom: "2px solid black" }}>
            <th style={{ padding: "5px", border: "1px solid black" }}>Type</th>
            <th style={{ padding: "5px", border: "1px solid black" }}>Count</th>
            <th style={{ padding: "5px", border: "1px solid black" }}>
              Percentage
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Type</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Angled Cells</td>
            <td>222</td>
            <td>67%</td>
          </tr>
          <tr>
            <td>Borderline Ovalocytes</td>
            <td>50</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Burr Cells</td>
            <td>87</td>
            <td>34%</td>
          </tr>
        </tbody>
      </table>

      <h3>WBC</h3>
      <table border="1" width="100%">
        <tbody>
          <tr>
            <th>Type</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Basophil</td>
            <td>222</td>
            <td>67%</td>
          </tr>
          <tr>
            <td>Eosinophil</td>
            <td>50</td>
            <td>20%</td>
          </tr>
        </tbody>
      </table>

      <h3>Platelets</h3>
      <table border="1" width="100%">
        <tbody>
          <tr>
            <th>Count</th>
            <td>222</td>
          </tr>
          <tr>
            <th>Percentage</th>
            <td>222%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsPanel;
