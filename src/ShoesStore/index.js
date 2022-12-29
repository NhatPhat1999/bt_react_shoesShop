import React, { Component } from 'react';
import ProductList from './productList';
import Modal from './modal';

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: 0
    }
  }

  setStateModal = (item) => {
    this.setState({
      productDetail: item
    })
  }

  render() {
    return (
      <>
        <ProductList setStateModal={this.setStateModal} />
        <Modal productDetail={this.state.productDetail} />
      </>
    )
  }
}
