import React, { Component } from 'react';

class Cart extends Component{
  render(){
    // console.log(this.props)
    const items = this.props.cart.map((item, id)=>{
      return <li key={id}>{item}</li>
    })
    return <ul>{items}</ul>
  }
}

export default Cart
