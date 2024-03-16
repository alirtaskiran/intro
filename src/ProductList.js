import React, { Component } from 'react'

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    state: {};
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <h4>{this.props.info.baskaBirSey}-{this.props.currentCategory}</h4>
      </div>
    )
  }
}
