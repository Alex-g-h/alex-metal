import React from 'react'

const FooterPart = () => {
  const currDate = new Date()

  return (
    <div className="footer footer-background">
      {/* // <div className="footer"> */}
      <div className="container">
        <div className="footer_left">
          <div className="footer_logo">
            <img
              className="company-logo"
              src={require('../../assets/logos/company/logo-rgb_blue.png')}
              alt=""
              width="50%"
            />
            <div className="footer_logo_text">
              <p>
                Все виды металлопроката
                <br /> от ведущих производителей
              </p>
            </div>
          </div>
          <div className="footer_copyright">
            <span></span> {currDate.getFullYear()}
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_nav">
            <nav>
              <ul>
                <li>
                  <a href="#part_actions">Услуги</a>
                </li>
                <li>
                  <a href="#part_info">О компании</a>
                </li>
                {/* <li>
                  <a href="#part_achievements">Достижения</a>
                </li> */}
                <li>
                  <a href="#part_products">Продукция</a>
                </li>
                {/* <li>
                  <a href="#part_partners">Партнеры</a>
                </li> */}
                <li>
                  <a href="#part_contacts">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPart
