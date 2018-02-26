import React from 'react'
import { Row, Col } from 'antd'
import '../../../assets/css/navigation.css'

const Content = () => {
  return(
    <div>
      <Row type="flex" justify="left" >
        <Row>
          <h2 style={{marginTop:'50px'}} className="txt-white">Gallery</h2>
        </Row>
         
      </Row>
        <Row gutter={12} style={{marginTop:'16px'}}>
            <Col span={12}><img alt="Image1" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image2" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}} /></Col>
        </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img alt="Image3" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image4" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
        </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img alt="Image5" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img alt="Image6" src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
       </Row>
     
    </div>
  )
}

export default Content