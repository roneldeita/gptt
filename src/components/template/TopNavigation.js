import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Affix, Row, Col, Icon } from 'antd'
import '../../assets/css/navigation.css'
import Logo from '../../assets/images/globalpinoytravel.png'
const SubMenu = Menu.SubMenu

const TopNavigation = ({ location }) => {
  const activeAuth = location.pathname !== '/login' && location.pathname !== '/register' ? [] : ['/login', 'register']
  return(
    <Affix style={{width:"100%"}}>
      <div className="menu-container">
        <Row className="" type="flex" justify="center">
          <Col className="" xs={24} sm={7} md={5}>
            <Link to="/"><img src={Logo} className="logo" alt="logo" /></Link>
          </Col>
          <Col className="web" span={9}>
            <Menu mode="horizontal" selectedKeys={[location.pathname]}>
              <Menu.Item key="/"><Link to="/">HOME</Link></Menu.Item>
              <SubMenu title="PACKAGES">
                <SubMenu title="DOMESTIC">
                  <Menu.Item key="/luzon">Luzon</Menu.Item>
                  <Menu.Item key="/visayas">Visayas</Menu.Item>
                  <Menu.Item key="/mindanao">Mindanao</Menu.Item>
                </SubMenu>
                <SubMenu title="INTERNATIONAL">
                  <SubMenu title="Africa">
                    <Menu.Item key="/luzon">Hotel</Menu.Item>
                    <Menu.Item key="/visayas">Hotel & Tours</Menu.Item>
                    <Menu.Item key="/mindanao">Tours</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="/Asia">Asia</Menu.Item>
                  <Menu.Item key="/Australia">Australia</Menu.Item>
                  <Menu.Item key="/Europe">Europe</Menu.Item>
                  <Menu.Item key="/NorthAmerica">North America</Menu.Item>
                  <Menu.Item key="/SouthAmerica">South America</Menu.Item>
                </SubMenu>
              </SubMenu>
              <Menu.Item key="/hotels"><Link to="/hotels">HOTELS</Link></Menu.Item>
              <Menu.Item key="/flights"><Link to="/flights">FLIGHTS</Link></Menu.Item>
              <Menu.Item key="/transfers"><Link to="/transfers">TRANSFERS</Link></Menu.Item>
            </Menu>
          </Col>
          <Col className="web" span={3}>
            <Menu mode="horizontal" selectedKeys={activeAuth}>
              <Menu.Item className="" key="/login" style={{float:'right'}}><Link to="/login"><Icon type="user" />Login / Register</Link></Menu.Item>
            </Menu>
          </Col>
          <Col className="mobile" xs={20} sm={11}>
            <Menu mode="horizontal" selectedKeys={[location.pathname]}>
              <SubMenu className="" title={<span><Icon type="bars" />Menu</span>}>
                <Menu.Item key="/"><Link to="/">HOME</Link></Menu.Item>
              </SubMenu>
              <Menu.Item className="" key="/login"><Link to="/login"><Icon type="user" />Login / Register</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}

export default TopNavigation
