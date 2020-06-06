import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/customers.css';

class Customers extends Component {

    state = {
        customerId: "",
        customerApproved: false
    }
    componentWillReceiveProps()
    {
        this.setState({customerId:"",customerApproved:false});
    }

    customerRecordSelected = ({_id,Approved}) => {
         this.setState({customerId:_id,customerApproved:Approved});
    }

    editRecord = (customer) => {
        
         let newCustomer = Object.assign({},customer);
         newCustomer.Approved = this.state.customerApproved;
         this.props.editCustomer(newCustomer,this.props.auth);
    }

    cancelEdit = () => {
       this.setState({customerId:"",customerApproved:false});
    }

    inputChanged = (event) => {
         this.setState({[event.target.name]:event.target.checked});
    }

    render() {
            let renderHtml = this.props.customers.map( (customer) => {
           
            let renderButtonsHtml = '';
            let renderApproveHtml = '';
            if (customer._id == this.state.customerId)
            {
                renderButtonsHtml = <>
                                      <div className="editbtn waves-effect waves-light btn-small" onClick={() => this.editRecord(customer)}>save</div>
                                      <div className="editbtn waves-effect waves-light btn-small red" onClick={() => this.cancelEdit()}>cancel</div>
                                    </>;
                renderApproveHtml =  
                                      <div class="switch"><label>Decline<input type="checkbox" name="customerApproved" checked={this.state.customerApproved} onChange={this.inputChanged}/><span class="lever"></span>Approve</label></div>
                                  
            }
            else
            {
                renderButtonsHtml = <div className="editbtn waves-effect waves-light btn-small" onClick={() => this.customerRecordSelected(customer)}>Edit</div>
                renderApproveHtml = <div class="switch"><label>Decline<input type="checkbox" name="customerApproved" checked={customer.Approved} onChange={this.inputChanged} disabled={true} /><span class="lever"></span>Approve</label></div>
            
            }
             return(
                 <div className="customer-card" key={customer._id}>
                     <div className="card-header">
                          {renderButtonsHtml}
                      </div>
                      <div className="card-body">
                          <div className="productName">{customer.name}</div>
                          <form action="#">{renderApproveHtml}</form>
                          <div className="productDesc">{customer.Address}</div>
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

export default connect(mapStateToProps,actions)(Customers);
