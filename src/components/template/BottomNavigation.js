import React from 'react'
// import { Link } from 'react-router-dom'
import { Row, Col  } from 'antd'
import '../../assets/css/navigation.css'
// import Logo from '../../assets/images/globalpinoytravel.png'

import Content1 from './bottomNavigationContent/content1'
import Content2 from './bottomNavigationContent/content2'
import Content3 from './bottomNavigationContent/content3'
import Content4 from './bottomNavigationContent/content4'

const BottomNavigation = () => {
  return(
    <div>
      <Row type="flex" justify="center" style={{backgroundColor:'#191d21'}}>
        <Col className="" xs={20} md={16}>
          <Row gutter={80}  className="bottom-navigation" type="flex" justify="center" style={{paddingBottom:"50px"}}>
            <Col sm={24} md={6}>
              <Content1/>
            </Col>
            <Col sm={24} md={6}>
               <Content2/>
            </Col>
            <Col sm={24} md={6}>
              <Content3/>
            </Col>
            <Col sm={24} md={6}>
              <Content4/>
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
