import React from "react";

const FooterPart = () => {
  return (
    <div className="footer footer-background">
      {/* // <div className="footer"> */}
      <div className="container">
        <div className="footer_left">
          <div className="footer_logo">
            {/* <div class="footer_logo_img"></div> */}
            <img
              className="company-logo"
              src={require("../../assets/logos/company/8347700-ai_cut.png")}
              alt=""
              width="150px"
            />
            <div className="footer_logo_text">
              <p>
                Все виды металлопроката
                <br /> от ведущих производителей
              </p>
              <p>
                <b>СтальИнвест</b>
              </p>
            </div>
          </div>
          <div className="footer_copyright">
            <span></span> 2023
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_nav">
            <nav>
              <ul>
                <li>
                  <a href="catalog/index.htm">Продукция</a>
                  <ul>
                    <li>
                      <a href="catalog/sortovoy-prokat/index.htm">
                        Сортовой прокат
                      </a>
                    </li>
                    <li>
                      <a href="catalog/listovoy-prokat/index.htm">
                        Листовой прокат
                      </a>
                    </li>
                    <li>
                      <a href="catalog/truby/index.htm">Трубы</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="standards/index.htm">Справочники и ГОСТы</a>
                </li>
                <li>
                  <a href="documents/index.htm">Документы</a>
                </li>
                <li>
                  <a href="rekvizity.php.html">Реквизиты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPart;
