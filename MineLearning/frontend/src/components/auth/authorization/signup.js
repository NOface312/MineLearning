import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SingUp } from './../../../services/api/user/auth/auth_service';

class Signup_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: "",
            surname: "",
            second_name: "",
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let options = {
            username : this.state.username,
            password : this.state.password,
            email : this.state.email,
            name : this.state.name,
            surname : this.state.surname,
            second_name : this.state.second_name,
        };
        SingUp(options).then(response => {
            this.props.history.push("/login/");
        })
    }

    render() {
        return (
            <div className="simple-login-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Регистрация</h2>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="name" type="text" placeholder="Имя" className="form-control" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="surname" type="text" placeholder="Фамилия" className="form-control" value={this.state.surname} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="second_name" type="text" placeholder="Отчество" className="form-control" value={this.state.second_name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="username" type="text" className="form-control" placeholder="Логин" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="email" type="text" className="form-control" placeholder="Почта" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password" type="password" placeholder="Пароль" className="form-control" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password2" type="password" placeholder="Повторите пароль" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" className="btn btn-block btn-login" />
                        </div>
                    </div>
                    <div className="row">
                        <label>Есть учётная запись?</label>
                        <div className="col-md-12">
                            <Link to="/login/">Войти</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup_Component;