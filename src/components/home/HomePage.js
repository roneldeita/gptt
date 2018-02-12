import React from 'react'
import {Carousel, Row, Col, Card} from 'antd'
import '../../assets/css/home.css'
import Banner1 from '../../assets/images/banner/el-nido.jpg'
import Banner2 from '../../assets/images/banner/Asia-Travel-Group.jpg'
import Banner3 from '../../assets/images/banner/coastal.jpg'

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      carousel:[
        { img:Banner1, slogan:'If not now, when?' },
        { img:Banner2, slogan:'Just Go!' },
        { img:Banner3, slogan:'We all deserve a little wanderlust.' }
      ]
    }
  }

  renderCarouselItem(item, index){
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

  render(){
    return(
      <div className="home-page">
        <Carousel vertical autoplay>
          {this.state.carousel.map((item, index) => {
            return this.renderCarouselItem(item, index)
          })}
        </Carousel>
        <Row type="flex" justify="center">
          <Col className="" span={16}>
            <Card className="card"
              actions={[
                <span className="fa fa-plane"/>,
                <span className="fa fa-bed"/>,
                <span className="fa fa-bus"/>,
                <span className="fa fa-suitcase"/>,
                <span className="fa fa-check-circle"/>
              ]}
            >
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
