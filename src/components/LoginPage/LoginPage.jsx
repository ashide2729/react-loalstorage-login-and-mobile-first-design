import React, { Component } from 'react';
import './_LoginPage.scss';
import uuid from 'react-uuid';

export default class LoginPage extends Component {

    constructor(props){  
        super(props);  
        this.state = {  
            userName: "",
            userPassword: ""
          }
      } 

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.userName === "Udayy" &&  this.state.userPassword === "Password"){
            window.localStorage.setItem("loggedUsername", this.state.userName);
            window.localStorage.setItem("accessToken", uuid());
            if(window.localStorage.getItem("accessToken") !== null){
                this.props.changeAuthentication(true);
            }
        }else{
            alert("Invalid Username/Password!");
        }
        
    }

    render(){
        return (
            <form className="loginpage-container" onSubmit={this.handleSubmit}>
                <div className="login-container">
                    <input type="text" name="" placeholder="Username" onChange={e=>this.setState({userName: e.target.value})} className="username-field"/>
                    <input type="password" name="" placeholder="Password" onChange={e=>this.setState({userPassword: e.target.value})} className="password-field"/>
                    <button type="submit" className="submit-button">Login</button>
                </div>
            </form>
        )
    }
}
