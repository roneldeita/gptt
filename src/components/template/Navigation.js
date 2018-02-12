import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Affix, Row, Col } from 'antd'
import '../../assets/css/navigation.css'
import Logo from '../../assets/images/globalpinoytravel.png'

const Navigation = ({ location }) => {
  return(
    <Affix>
      <div className="menu-container">
        <Row className="" type="flex" justify="center">
          <Col className="" xs={24} sm={24} md={5}>
            <Link to="/"><img src={Logo} className="logo" alt="logo" /></Link>
          </Col>
          <Col className="" span={11}>
            <Menu mode="horizontal" selectedKeys={[location.pathname]} className="menu">
              <Menu.Item key="/" location="right"><Link to="/">HOME</Link></Menu.Item>
              <Menu.Item key="/flights"><Link to="/flights">FLIGHTS</Link></Menu.Item>
              <Menu.Item key="/hotels"><Link to="/hotels">HOTELS</Link></Menu.Item>
              <Menu.Item key="/transfers"><Link to="/transfers">TRANSFERS</Link></Menu.Item>
              <Menu.Item key="/tours"><Link to="/tours">TOURS</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}

export default Navigation
