import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wed1 from '../../assets/img/wed-1.jpg'
import wed2 from '../../assets/img/wed-2.jpg'
import wed3 from '../../assets/img/wed-3.jpg'
import wed4 from '../../assets/img/wed-4.jpg'

import './Carousel.css'

const photos = [
  {
    name: 'photo 1',
    url: '../../assets/img/wed-1.jpg'
  },
  {
    name: 'photo 2',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'photo 3',
    url: 'https://images.unsplash.com/photo-1546749876-2088f8b19e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'photo 4',
    url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
]
class Carousel extends React.Component {
  render() {

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
      autoplay: true,
      autoplaySpeed: 2000,
      touchMove: true,
      className: "slides",
      cssEase: "linear"
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width='100%' src={photo.url} />
              </div>
            )
          })}
        </Slider>
      </div>

    )

  }

}

export default Carousel