import './App.css';
import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';

export default class App extends Component {

  constructor(props){  
    super(props);  
    this.state = {
      isAuthenticated: false
     }
  }

  changeAuthentication = ( bool ) => {
    this.setState({
      isAuthenticated: bool
    })
  }

  componentDidMount(){
    if(window.localStorage.getItem("accessToken")){
      this.setState({
        isAuthenticated: true
      })
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.isAuthenticated ?
          <HomePage changeAuthentication={this.changeAuthentication}></HomePage>
          :
          <LoginPage changeAuthentication={this.changeAuthentication}></LoginPage>
        }    
      </div>
    )
  }
}
