import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react'
import Login from './Login';
import DashBoard from './DashBoard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {BrowserRouter,Route} from 'react-router-dom';
import Error from './Error';
import '../css/app.css';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                   <>
                     <Error />
                     <Route exact path = "/login" component = {Login} />
                     <Route exact path = "/" component = {DashBoard} />
                   </>
               </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actions)(App);

