import React, { useRef } from "react";
import headerVideo from "../../assets/video/office.mp4";

const CompanyPart = () => {
  const isMuted = useRef(true);

  return (
    // <div className="company-background">
    <div>
      <div className="main-screen">
        <header>
          <a
            href="index.html"
            className="header_logo"
          ></a>
          <div className="header">
            <div className="header_left"></div>
            <div className="header_right">
              <div className="header_phone">
                <div>Офис</div>
                <a href="tel:+74732224101">
                  <span>+7 (473) 222-41-01</span>
                </a>
              </div>
              <div className="header_phone">
                <div>Склад</div>
                <a href="tel:+74732224102">
                  <span>+7 (473) 222-41-02</span>
                </a>
              </div>
            </div>
          </div>
          <div className="main_logo">
            <div className="main_logo_img"></div>
            <div className="main_logo_text">
              <div className="main_logo_b">
                Все виды
                <br /> металлопроката
              </div>
              <div className="main_logo_s">от ведущих производителей</div>
            </div>
          </div>
          <video
            muted={isMuted.current}
            // muted={true}
            autoPlay
            loop
          >
            <source
              src={headerVideo}
              type="video/mp4"
            />
          </video>
        </header>
      </div>
    </div>
  );
};

export default CompanyPart;
