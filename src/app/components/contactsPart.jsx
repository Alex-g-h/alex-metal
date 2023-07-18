import React from "react";

const ContactsPart = () => {
  const office = {
    address: "394036, г. Воронеж, ул. Степана Разина, 5А, офис 201",
    phone: "+7 (473) 222-41-01",
  };

  const storehouse = {
    address: "394028, г.Воронеж, Монтажный проезд, 13Б, офис 7",
    phone: "+7 (473) 222-41-02",
  };

  return (
    // <div className="contacts contacts-background">
    <div
      id="part_contacts"
      className="contacts contacts__img"
    >
      <div className="contacts">
        <div className="contacts__caption">Контакты</div>
        <div className="contacts__container">
          <div className="contacts__container__caption">Офис</div>
          <div className="contacts__address">
            Адрес:
            <a
              href="https://yandex.ru/maps/?pt=39.218029,51.670294&z=18&l=map"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              {office.address}
            </a>
          </div>
          <div className="contacts__phone">
            Телефон:
            <a href="tel:+74732224101">
              {" "}
              <span>{office.phone}</span>
            </a>
          </div>
        </div>
        <div className="contacts__container">
          <div className="contacts__container__caption">Склад</div>
          <div className="contacts__address">
            Адрес:
            <a
              href="https://yandex.ru/maps/?pt=39.287700,51.635900&z=18&l=map"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              {storehouse.address}
            </a>
          </div>
          <div className="contacts__phone">
            Телефон:
            <a href="tel:+74732224102">
              {" "}
              <span>{storehouse.phone}</span>
            </a>
          </div>
        </div>
        <div className="contacts__container">
          <div className="contacts__site">
            САЙТ: <a href="http://www.steelvrn.ru">steelvrn.ru</a>
          </div>
          <div className="contacts__mail">
            E-MAIL: <a href="mailto:steel_vrn@bk.ru">steel_vrn@bk.ru</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPart;
