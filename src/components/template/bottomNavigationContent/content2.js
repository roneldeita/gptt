import React from 'react'
import { Row, Col ,Button } from 'antd'
import '../../../assets/css/navigation.css'

const Content = () => {
  return(
    <div>
      <Row type="flex" justify="center">
        <Col span={24} style={{marginTop:'50px'}}>
          <h2 className="txt-white">Latest News</h2>
          <h4 className="txt-white">Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className="txt-white">05.04.2018</h5>
          <h5 className="border"></h5>
        </Col>
        <Col span={24}>
          <h4 className="txt-white">Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className="txt-white">05.04.2018</h5>
          <h5 className="border"></h5>
        </Col>
        <Col span={24}>
          <h4 className="txt-white">Water & Rock Discovering the beauty of Oslob,Cebu</h4>
          <h5 className="txt-white">05.04.2018</h5>
        </Col>
      </Row>
    </div>
  )
}

export default Content