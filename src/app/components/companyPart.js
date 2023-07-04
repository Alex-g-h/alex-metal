import React from "react";
//import { ReactComponent as CompanyLogo } from "../../assets/logos/company/8347700-ai.svg";

const CompanyPart = () => {
  return (
    <div className="company-background">
      {/* <CompanyLogo /> */}
      <img
        className="company-logo"
        src={require("../../assets/logos/company/8347700-ai_cut.png")}
        alt=""
        width="150px"
      />
      Company main info
    </div>
  );
};

export default CompanyPart;
