import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import "./../css/login.css";
import { Login } from './../../../services/api/user/auth/auth_service'

class Login_Component extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let options = {
            username: this.state.username,
            password: this.state.password
        };
        Login(options).then(response => {
            this.props.history.push("/");
        })
    }

    render() {
        return (
            <div className="simple-login-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Войти</h2>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="username" type="text" className="form-control" placeholder="Логин" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password" type="password" placeholder="Пароль" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" className="btn btn-block btn-login"/>
                        </div>
                    </div>
                    <div className="row">
                        <label>Нет учётной записи?</label>
                        <div className="col-md-12">
                            <Link to="/signup/">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login_Component;
