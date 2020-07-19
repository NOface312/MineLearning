import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ChangePassword } from './../../../services/api/user/edit/edit_service';

class Edit_Password_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password: "",
            new_password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let options = {
            old_password: this.state.old_password,
            new_password: this.state.new_password
        };
        ChangePassword(options).then(response => {
            this.props.history.push("/login/");
        })
    }

    render() {
        return (
            <div className="simple-login-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Изменить пароль</h2>

                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="old_password" type="old_password" placeholder="Старый пароль" className="form-control" value={this.state.old_password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="new_password" type="new_password" placeholder="Новый пароль" className="form-control" value={this.state.new_password} onChange={this.handleChange} />
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

export default Edit_Password_Component;