import React from "react";

const Partners = ({ key, text, img, img_wide }) => {
  const classAll = "partner__img";
  const classes = img_wide ? classAll + " partner__img--wide" : classAll;

  return (
    <div className="partner">
      <img
        className={classes}
        key={key}
        src={img}
        alt={text}
        title={text}
      />
    </div>
  );
};

export default Partners;
