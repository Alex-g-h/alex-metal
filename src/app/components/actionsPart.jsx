import React from "react";

const ActionsPart = () => {
  return (
    // <div className="actions-background">
    <div id="part_actions">
      <div className="main_wedo">
        <div className="container">
          <div className="main_wedo_row">
            <div className="main_wedo_item">
              <div className="main_wedo_img">
                <img
                  src={require("../../assets/images/backgrounds/2-actions-1.jpg")}
                  alt=""
                />
              </div>
              <div className="main_wedo_cont">
                <div className="main_wedo_title">Металлопрокат</div>
                <div className="main_wedo_text">оптом и в розницу</div>
              </div>
            </div>
            <div className="main_wedo_item">
              <div className="main_wedo_img">
                <img
                  src={require("../../assets/images/backgrounds/2-actions-2.jpg")}
                  alt=""
                />
              </div>
              <div className="main_wedo_cont">
                <div className="main_wedo_title">Порезка, упаковка</div>
                <div className="main_wedo_text">в необходимый размер</div>
              </div>
            </div>
            <div className="main_wedo_item">
              <div className="main_wedo_img">
                <img
                  src={require("../../assets/images/backgrounds/2-actions-3.jpg")}
                  alt=""
                />
              </div>
              <div className="main_wedo_cont">
                <div className="main_wedo_title">Доставка</div>
                <div className="main_wedo_text">по всей России и СНГ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsPart;
