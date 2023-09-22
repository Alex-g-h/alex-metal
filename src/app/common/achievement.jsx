import React from "react";

const Achievement = ({ text, icon }) => {
  return (
    <div className="achievement">
      <div className="achievement-icon">
        <img
          className="achievement-img"
          src={icon}
          alt=""
        />
      </div>
      <div className="achievement-text text_shadow">{text}</div>
    </div>
  );
};

export default Achievement;
