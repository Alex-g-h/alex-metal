import React from "react";

const CompanyPart = () => {
  return (
    <div className="company-background">
      <img
        className="profile__avatar"
        src={require("../../assets/images/backgrounds/1-company.jpg")}
        alt=""
      />
      Company main info
    </div>
  );
};

export default CompanyPart;
