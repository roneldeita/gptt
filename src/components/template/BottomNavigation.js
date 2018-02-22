import React from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import '../../assets/css/navigation.css'
// import Logo from '../../assets/images/globalpinoytravel.png'

const BottomNavigation = () => {
  return(
    <div>
      <Row type="flex" justify="center" style={{backgroundColor:'#191d21'}}>
        <Col className="" span={16}>
          <Row className="bottom-navigation" type="flex" justify="center">
            <Col className="border" span={5}>
            </Col>
            <Col className="border" span={5}>
            </Col>
            <Col className="border" span={4}>
            </Col>
            <Col className="border" span={5}>
            </Col>
            <Col className="border" span={5}>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{color:'white', textAlign:'center', backgroundColor:'white', paddingTop:'5px'}}>
          <h4 className="txt-dark-grey">Copyright 2018 by Global Pinoy Travel & Tours. All Rights Reserved.</h4>
        </Col>
      </Row>
    </div>
  )
}

export default BottomNavigation
