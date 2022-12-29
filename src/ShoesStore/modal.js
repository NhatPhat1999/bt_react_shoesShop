import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { productDetail } = this.props;
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{productDetail.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Image</td>
                                        <td><img src={productDetail.image} className="img-fluid" alt=""/></td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td>{productDetail.quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>Alias</td>
                                        <td>{productDetail.alias}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{productDetail.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{productDetail.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
