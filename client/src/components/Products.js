import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/products.css';

class Products extends Component {

    state = {
        productId: "",
        productPrice: ""
    }

    componentWillReceiveProps()
    {
        this.setState({productId:"",productPrice:""});
    }

    productRecordSelected = ({_id,price}) => {
         this.setState({productId:_id,productPrice:price});
    }

    editRecord = (product) => {
        
         let newProduct = Object.assign({},product);
         newProduct.price = this.state.productPrice;
         this.props.editProduct(newProduct,this.props.auth);
    }

    cancelEdit = () => {
       this.setState({productId:""});
    }

    inputChanged = (event) => {
         this.setState({[event.target.name]:event.target.value});
    }

    render() {

        let renderHtml = this.props.products.map( (product) => {
           
          let renderButtonsHtml = '';
          let renderPriceHtml = '';
          if (product._id == this.state.productId)
          {
              renderButtonsHtml = <>
                                    <div className="editbtn waves-effect waves-light btn-small" onClick={() => this.editRecord(product)}>save</div>
                                    <div className="editbtn waves-effect waves-light btn-small red" onClick={() => this.cancelEdit()}>cancel</div>
                                  </>;
              renderPriceHtml =  <div className="productPrice">
                                    <input type="text" name="productPrice" value={this.state.productPrice} onChange={this.inputChanged}/>
                                 </div>;
          }
          else
          {
              renderButtonsHtml = <div className="editbtn waves-effect waves-light btn-small" onClick={() => this.productRecordSelected(product)}>Edit</div>
              renderPriceHtml =  <div className="productrPrice">{product.price}</div>;
          }
           return(
               <div className="product-card" key={product._id}>
                   <div className="card-header">
                        {renderButtonsHtml}
                    </div>
                    <div className="card-body">
                        <div className="productName">{product.name}</div>
                        {renderPriceHtml}
                        <div className="productDesc">{product.desc}</div>
                    </div>
               </div>
           )
        });

        return (
            <>
                {renderHtml}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actions)(Products);
