import React, { Component } from 'react';
import ProductItem from './productitem';
import data from "./data.json"


export default class ProductList extends Component {
    constructor(props){
        super(props);

        this.state={
            productData: data,
        }
    }

    renderShoes=()=>{
        const {productData}=this.state;
        return productData.map((product,index)=>{
          return <div className='col-4 mb-2' key={index} >
              <ProductItem item={product} setStateModal={this.props.setStateModal}/>
            </div>
        })
    }

    da

  render() {
    return (
      <div className='container'>
        <div className='row'>
            {this.renderShoes()}
        </div>
      </div>
    )
  }
}
