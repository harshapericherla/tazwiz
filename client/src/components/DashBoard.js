import React, { Component } from 'react'

class DashBoard extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actions)(DashBoard);