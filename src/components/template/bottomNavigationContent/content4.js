import React from 'react'
import { Row, Col ,Button,Icon } from 'antd'
import '../../../assets/css/navigation.css'

const Content = () => {
  return(
    <div>
      <Row type="flex">
        <h2 className="txt-white" style={{marginTop:'50px'}}>Download GPPT App</h2>
              <Row gutter={6} >
                <Col span={12}><img src={require('../../../assets/images/Android.png')} style={{width:"100%"}} /></Col>
                <Col span={12}><img src={require('../../../assets/images/Apple.png')} style={{width:"100%"}} /></Col>
              </Row>
      
          <Row style={{marginTop:'50px'}}>
              <h2 className="txt-white">Connect with Global</h2>
              <h2 className="txt-white">Pinoy Travel & Tours</h2>
              <Row gutter={6}>
                <Col span={6}><Icon type="facebook" style={{ color: '#08c' }}/></Col>
                <Col span={6}><Icon type="twitter"  style={{ color: '#08c' }}/></Col>
                <Col span={6}><Icon type="linkedin" style={{ color: '#08c' }}/></Col>  
                <Col span={6}><Icon type="google-plus" style={{ color: '#08c' }}/></Col>             
              </Row>
          </Row>

      </Row>
     
    </div>
  )
}

export default Content