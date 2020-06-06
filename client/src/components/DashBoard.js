import React, { Component } from 'react'
import Products from './Products';
import Customers from './Customers';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/dashboard.css';

class DashBoard extends Component {

    constructor()
    {
        super();
        this.logout = this.logout.bind(this);
    }

    componentDidMount()
    {
        this.redirectToLogin(this.props);

        this.props.fetchProducts(this.props.auth);
        this.props.fetchCustomers(this.props.auth);
    }

    componentWillReceiveProps(newProps)
    {
        this.redirectToLogin(newProps);
    }

    redirectToLogin(props)
    {
        if(!props.auth || props.auth.length == 0)
        {
            props.history.push("/login");
        }
    }

    logout()
    {
        this.props.signout();
    }

    render() {
        return (
            <div className="dash-wrapper">
                 <div className="navBar">
                     <div className="signout" onClick={this.logout}>SIGN OUT</div>
                 </div>
                 <div className="body-wrapper">
                      <div className="customers">
                          <div className="header"></div>
                          {this.props.customers.length > 0 ?  <Customers /> : <></>} 
                      </div>
                      <div className="products">
                          <div className="header"></div>
                          {this.props.products.length > 0 ?  <Products /> : <></>}
                      </div>
                 </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actions)(DashBoard);