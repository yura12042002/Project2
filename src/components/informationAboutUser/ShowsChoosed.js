import React from "react";

function ShowsChoosed({ data, items }) {
  return (
    <table>
      <tr>
        {items.map((el) => (
          <td style={{ fontWeight: 600 }}>{el}</td>
        ))}
      </tr>
      {data.map((obj) => (
        <tr>
          {selectedCategories.map((cat) => (
            <td>{obj[cat]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default ShowsChoosed;
