import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://3.22.1.249:8000/api/auth/register/";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            emailAddress: '',
            password: ''
        };
    
        this.handleUNChange = this.handleUNChange.bind(this);
        this.handleEAChange = this.handleEAChange.bind(this);
        this.handlePChange = this.handlePChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleUNChange(event) {
        this.setState({userName: event.target.value});
      }
      handleEAChange(event) {
        this.setState({emailAddress: event.target.value});
      }
      handlePChange(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log('Updated State',this.state);
        axios
        .post(baseURL, {
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },
            username: this.state.userName,
            email:this.state.emailAddress,
            password: this.state.password
        })
        .then((response) => {
        //   setPost(response.data);
            console.log(response); 
        });
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" value={this.state.userName} onChange={this.handleUNChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  value={this.state.emailAddress} onChange={this.handleEAChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}