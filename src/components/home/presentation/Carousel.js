import React from 'react'
import PropTypes from 'prop-types';
import {Carousel as AntdCarousel, Row, Col} from 'antd'

const renderCarouselItem = (item, index) => {
  return (
    <div key={index} className="carousel-item" style={{backgroundImage:'url(' + item.img + ')'}}>
      <Row type="flex" justify="center">
        <Col span={16}>
          <p className="slogan">{item.slogan}</p>
        </Col>
      </Row>
    </div>
  )
}

const Carousel = ({items}) => {
  return (
    <AntdCarousel vertical autoplay>
      {items.map((item, index) => {
        return renderCarouselItem(item, index)
      })}
    </AntdCarousel>
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}

export default Carousel
