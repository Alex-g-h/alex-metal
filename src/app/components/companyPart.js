import React, { useEffect, useRef } from "react";
//import { ReactComponent as CompanyLogo } from "../../assets/logos/company/8347700-ai.svg";
import headerVideo from "../../assets/video/office.mp4";

const CompanyPart = () => {
  const isMuted = useRef(true);

  // useEffect(() => {
  // isMuted.current.defaultMuted = true;
  // });

  return (
    // <div className="company-background">
    <div>
      {/* <CompanyLogo /> */}
      {/* <img
        className="company-logo"
        src={require("../../assets/logos/company/8347700-ai_cut.png")}
        alt=""
        width="150px"
      /> */}
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
            // src="../../assets/video/header_fhd.mp4"
            // poster="video/header_hd.jpg"
          >
            <source
              src={headerVideo}
              // src="../../assets/video/header_fhd.mp4"
              // src="https://drive.google.com/file/d/1vm52ZqyBs53ga6OL0DCFg1nCrierbYrX/view"
              type="video/mp4"
            />
            {/* <source
              src="../../assets/video/Untitled.webm"
              type="video/webm"
            ></source> */}
          </video>
        </header>
      </div>
    </div>
  );
};

export default CompanyPart;
