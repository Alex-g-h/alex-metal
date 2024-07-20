import React from 'react'
import Slider from 'react-slick'
import Product from '../common/product'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProductsPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  }

  return (
    // <div className="products-background products">
    <div
      id="part_products"
      className="products"
    >
      <div className="products__caption">Продукция</div>
      <div className="products__slider">
        <Slider {...settings}>
          <Product
            key={0}
            text="Труба профильная"
            img={require('../../assets/images/backgrounds/5-products-0.jpg')}
          />
          <Product
            key={1}
            text="Труба электросварная"
            img={require('../../assets/images/backgrounds/5-products-1.jpg')}
          />
          <Product
            key={2}
            text="Труба бесшовная"
            img={require('../../assets/images/backgrounds/5-products-2.jpg')}
          />

          <Product
            key={3}
            text="Круг стальной"
            img={require('../../assets/images/backgrounds/5-products-3.jpg')}
          />
          <Product
            key={4}
            text="Лист"
            img={require('../../assets/images/backgrounds/5-products-4.jpg')}
          />
          <Product
            key={5}
            text="Арматура"
            img={require('../../assets/images/backgrounds/5-products-5.jpg')}
          />
          <Product
            key={6}
            text="Балка двутавровая"
            img={require('../../assets/images/backgrounds/5-products-6.jpg')}
          />
          <Product
            key={7}
            text="Швеллер"
            img={require('../../assets/images/backgrounds/5-products-7.jpg')}
          />
          <Product
            key={8}
            text="Уголок"
            img={require('../../assets/images/backgrounds/5-products-8.jpg')}
          />
        </Slider>
      </div>
    </div>
  )
}

export default ProductsPart
