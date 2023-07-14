import React from "react";
import Achievement from "../common/achievement";

const AchievementsPart = () => {
  return (
    <div className="achievements-background achievements">
      <Achievement
        text="15+ лет на рынке"
        icon={require("../../assets/icons/time.svg").default}
      />
      <Achievement
        text="2.5+ млн тонн отгружено"
        icon={require("../../assets/icons/metal.svg").default}
      />
      <Achievement
        text="В 20+ городов поставлено"
        icon={require("../../assets/icons/city.svg").default}
      />
      <Achievement
        text="45+ крупных заказчиков"
        icon={require("../../assets/icons/customer.svg").default}
      />
    </div>
  );
};

export default AchievementsPart;
