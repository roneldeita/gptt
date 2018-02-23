import React from 'react'
import { Row, Col ,Button } from 'antd'
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
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}} /></Col>
       </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
       </Row>
        <Row gutter={12} style={{marginTop:'16px'}} >
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
            <Col span={12}><img src={'http://via.placeholder.com/140x100'} style={{width:"100%"}}  /></Col>
       </Row>
     
    </div>
  )
}

export default Content