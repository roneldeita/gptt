import React, { Component } from 'react';
import Items from './container/Items';
import Shelf from './presentation/Shelf'

class Index extends Component {
  render() {
    return (
      <div className="Cart">
        <Shelf />
        <Items />
      </div>
    );
  }
}

export default Index;
