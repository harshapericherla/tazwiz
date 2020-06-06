import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/login.css';

class Login extends Component {

    state = {
        email:'',
        password:''
    }

    componentDidMount()
    {
        this.checkIfLoggedIn(this.props);
    }

    componentWillReceiveProps(newProps)
    {
        this.checkIfLoggedIn(newProps);
    }


    checkIfLoggedIn = (props) => {
        if(props.auth && props.auth.length > 0)
        {
            this.props.history.push("/");
        }
    }

    inputChanged = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    submitForm = (event) =>{
        event.preventDefault();

        let user = {email:this.state.email,password:this.state.password};
        this.props.loginUser(user);
    }

    render() {
        return (
           <div className="login-div">
               <div className="login-header">
                     SIGN IN
               </div>
              <div className="input-field">
                <input type="email" name="email" id="email-input" value={this.state.email} onChange={this.inputChanged} class="validate" required/>
                <label htmlFor="email-input">Enter your email</label>
              </div>
              <div className="input-field">
                  <input type="password" name="password" id="pass-input" value={this.state.password} onChange={this.inputChanged} class="validate" required/>
                  <label htmlFor="pass-input">Enter your password</label>
              </div>
              <div className="submit">
                    <a className="waves-effect waves-light btn" onClick={this.submitForm}>
                        Login
                    </a>
              </div>
             
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,actions)(Login);