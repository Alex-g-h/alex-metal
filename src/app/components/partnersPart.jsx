import React from "react";
import Partner from "../common/partner";

const PartnersPart = () => {
  return (
    <div
      id="part_partners"
      className="partners-background"
    >
      <div className="partners">
        <div className="partners__text">Партнёры</div>
        <div className="partners__items">
          <Partner
            key={1}
            img={require("../../assets/logos/partners/1-sber.png")}
            img_wide={true}
            text="Сбербанк"
          />
          <Partner
            key={2}
            img={require("../../assets/logos/partners/2-vtb-24.png")}
            img_wide={true}
            text="ВТБ-24"
          />
          <Partner
            key={3}
            img={require("../../assets/logos/partners/3-mechel.png")}
            img_wide={true}
            text="Мечел"
          />
          <Partner
            key={4}
            img={require("../../assets/logos/partners/4-sever_stal.png")}
            img_wide={true}
            text="Северсталь"
          />
          <Partner
            key={5}
            img={require("../../assets/logos/partners/5-tmk2.png")}
            text="Трубная металлургическая компания"
          />
          <Partner
            key={6}
            img={require("../../assets/logos/partners/6-nlmk.png")}
            img_wide={true}
            text="Новолипецкий металлургический комбинат"
          />
          <Partner
            key={7}
            img={require("../../assets/logos/partners/7-rgmk.jpg")}
            text="Русская горно-металлургическая компания"
          />
          <Partner
            key={8}
            img={require("../../assets/logos/partners/8-mmk.png")}
            text="Магнитогорский металлургический комбинат"
          />
          <Partner
            key={9}
            img={require("../../assets/logos/partners/9-amet.png")}
            img_wide={true}
            text="Ашинский металлургический завод"
          />
          <Partner
            key={10}
            img={require("../../assets/logos/partners/10-etz.png")}
            text="Энгельсский трубный завод"
          />
          <Partner
            key={11}
            img={require("../../assets/logos/partners/11-evraz.png")}
            img_wide={true}
            text="Евраз"
          />
          <Partner
            key={12}
            img={require("../../assets/logos/partners/12-tagmet.png")}
            text="Таганрогский металлургический завод"
          />
          <Partner
            key={13}
            img={require("../../assets/logos/partners/13-mn.jpg")}
            text="МН"
          />
          <Partner
            key={14}
            img={require("../../assets/logos/partners/14-metinvest.png")}
            img_wide={true}
            text="Метинвест"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersPart;
