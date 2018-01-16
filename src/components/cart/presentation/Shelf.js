import React, { Component } from 'react';
import { addToCart } from '../../../actions/cart';
import { connect } from 'react-redux';

class Shelf extends Component {
  constructor(props){
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this)
    this.state = {
      shelfItems: [
        'Shampoo',
        'Chocolates',
        'Energy drink',
        'Coffee',
        'Yogurt'
      ]
    }
  }

  onClickAdd(item){
    this.props.dispatch(addToCart(item))
  }

  render() {
    console.log(this.props)
    const shelfItems = this.state.shelfItems.map((item, id) => {
      return <li key={id}>{item}<button onClick={() => this.onClickAdd(item)}>Add</button></li>
    });
    return (
      <div className="shelf">
        { shelfItems }
      </div>
    );
  }
}

export default connect()(Shelf);
