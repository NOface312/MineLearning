import React, { Component } from "react";
import axiosInstance from "./../../../axios/axiosAPI";
import { Link } from "react-router-dom";
import { GetCurrentUserData, ChangeUserData } from "../../../services/api/user/edit/edit_service";

class Edit_Profile_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            name: "",
            surname: "",
            second_name: "",
            email: "",
            bio: "",
            new_password: "",
            old_password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetCurrentUserData = this.handleGetCurrentUserData.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let options = {
            username: this.state.username,
            email: this.state.email,
            name: this.state.name,
            surname: this.state.surname,
            second_name: this.state.second_name,
            bio: this.state.bio,
            new_password: this.state.new_password,
            old_password: this.state.old_password,
        };
        ChangeUserData(options).then(response => {
            console.log("sas");
        })
    }

    handleGetCurrentUserData() {
        GetCurrentUserData().then(response => {
            this.setState({
                username: response.data.username,
                name: response.data.name,
                surname: response.data.surname,
                second_name: response.data.second_name,
                email: response.data.email,
                bio: response.data.bio,
            })
        })
    }

    componentDidMount() {
        this.handleGetCurrentUserData();
    }

    render() {
        return (
            <div className="simple-login-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Изменить</h2>
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
                            <input name="bio" type="textarea" className="form-control" placeholder="Биография" value={this.state.bio} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="old_password" type="password" placeholder="Старый Пароль" className="form-control" value={this.state.old_password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="new_password" type="password" placeholder="Новый Пароль" className="form-control" value={this.state.new_password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" className="btn btn-block btn-login" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/login/">Сохранить</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit_Profile_Component;