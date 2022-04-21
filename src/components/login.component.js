import React, { Component } from "react";
import axios from "axios";
const baseURL = "http://3.22.1.249:8000/api/auth/login/";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };

        this.handleUNChange = this.handleUNChange.bind(this);
        this.handlePChange = this.handlePChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUNChange(event) {
        this.setState({ userName: event.target.value });
    }
    handlePChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log('Updated State', this.state);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' },
            body: {
                username: this.state.userName,
                password: this.state.password
            }
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        // axios
        //     .post(baseURL, {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'Accept': 'application/json',
        //             "Access-Control-Allow-Origin": "*",
        //             'Access-Control-Allow-Credentials': 'true'
        //         },
        //         username: this.state.userName,
        //         password: this.state.password
        //     })
        //     .then((response) => {
        //         //   setPost(response.data);
        //         console.log(response);
        //     });
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={this.state.userName} onChange={this.handleUNChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
