import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const src = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';
    const styleImg = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className={`card ${this.props.selected ? 'active' : ''}`} style={styleImg}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.props.handleClick} id={this.props.flatId} ></a>
      </div>
    )
  }
};

export default Flat;
