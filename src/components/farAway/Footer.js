import React from "react";

function Footer({list}) {
  return (
    <div className="footer">
      <p>
        you have {list.length} items on your list, and you already packed{" "}
        {list.reduce((acc, el) => (el.check ? ++acc : acc), 0)}(
        {list.length > 0
          ? (
              (list.reduce((acc, el) => (el.check ? ++acc : acc), 0) *
                100) /
              list.length
            ).toFixed(0)
          : 0}
        )%
      </p>
    </div>
  );
}

export default Footer;
