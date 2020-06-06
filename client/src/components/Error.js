import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

class Error extends Component {
    
    componentWillReceiveProps(newProps)
    {
        if(newProps.error)
            M.toast({html: newProps.error})
    }

    render() {
        return (
           <></>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps,null)(Error);