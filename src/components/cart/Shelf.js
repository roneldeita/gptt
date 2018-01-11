import React, { Component } from 'react';

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

  // renderItems(){
  //   var items = [];
  //   this.state.shelfItems.map((item, id) => {
  //     items.push(<li key={id}>{item}<button>[+]</button></li>)
  //   })
  //
  //   return (
  //     <div>
  //       {items}
  //     </div>
  //   )
  //
  // }

  onClickAdd(item){
    this.props.addItem(item)
  }

  render() {
    // console.log(this.props)
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

export default Shelf;
