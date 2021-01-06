import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat, index) => {
            return <Flat key={index} flatId={index} selected={this.props.selectedFlat.name === flat.name} flat={flat} handleClick={this.props.handleClick} />
          })
        }
      </div>
    )
  }
};

export default FlatList;
