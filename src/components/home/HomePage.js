import React from 'react'
import '../../assets/css/home.css'
import NProgress from 'nprogress'
import Carousel from './presentation/Carousel'
import {Row} from 'antd'
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
  componentWillMount() {
    NProgress.start()
  }
  componentDidMount(){
    NProgress.done()
  }

  render(){
    console.log(this.props)
    return(
      <div className="home-page">
        <Carousel items={this.state.carousel} />
        <Row className="" type="flex" justify="center">
        </Row>
      </div>
    )
  }
}

export default HomePage
