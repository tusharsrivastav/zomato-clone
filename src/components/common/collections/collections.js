import React from 'react'
import './collections.css'
import Slider from 'react-slick/lib/slider';
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collections = ({ list }) => {
  return (
    <div className='collection-wrapper'>
      <div className='collection max-width'>
        <div className='collection-title'>Collections</div>
        <div className='collection-subtitle-row'>
          <div className='collection-subtitle-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Greater Noida, based on trends
          </div>
          <div className='collection-location'>
            <div>All collections in Delhi NCR</div>
            <i className='fi fi-rr-caret-right absolute-center'></i>
          </div>
        </div>
        <Slider {...settings}>
            {list.map((item) => (
              <div>
                <div className='collection-cover'>
                  <img src={item.cover} className='collection-img' alt={item.title}/>
                  <div className='gradient-bg'></div>
                  <div className='collection-card-title'>{item.title}</div>
                  <div className='collection-card-subtitle'>
                    <div>{item.places}</div>
                    <i className='fi fi-rr-caret-right absolute-center'></i>
                  </div>
                </div>
              </div>
            )) }
        </Slider>
      </div>
    </div>
  )
}

export default Collections