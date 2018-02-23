import React from 'react'
import { Row, Col ,Button } from 'antd'
import '../../../assets/css/navigation.css'

const Content = () => {
  return(
    <div>
      <Row type="flex" justify="center">
        <Row type='flex' justify="space-between">
          <Col style={{paddingBottom:"30px"}} span={24}><img src={require('../../../assets/images/globalpinoytravel-White.png')} style={{width:"100%",maxWidth:"200px"}} /></Col>
          <Col span={8}><img src={require('../../../assets/images/Sec_Ass-01.png')} style={{width:"50%", maxWidth:'50px'}} /></Col>
          <Col span={8}><img src={require('../../../assets/images/IATA-01.png')} style={{width:"50%", maxWidth:'50px'}} /></Col>
          <Col span={8}><img src={require('../../../assets/images/24HR-01.png')} style={{width:"50%", maxWidth:'50px'}} /></Col>

        </Row>
   
        <Col style={{paddingTop:"20px"}} span={24} >
          <h4 style={{paddingBottom:'10px'}} className="txt-white">Customer Service</h4>
          <h4 className="txt-white"></h4>
          <h5 className="txt-white">+63-9XX-XXX-XXXX</h5>
          <h5 className="txt-white">Email:support@mygprs.com</h5>
          <h5 className="txt-white">Address: Floor,St.,Barangay,Quezon City</h5>
          <h5 className="txt-white">Metro Manila Philippines 1000</h5>
          <h5 className="txt-white">Offic Hours: Monday-Friday 8 30am -6 30pm</h5>
        </Col>

      </Row>
     
    </div>
  )
}

export default Content