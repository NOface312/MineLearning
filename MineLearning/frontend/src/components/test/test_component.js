import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosApi";

class Test_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: null,
            news: null,
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleHello = this.handleHello.bind(this);
        this.handleGetNew = this.handleGetNew.bind(this);
        this.handleGetNews = this.handleGetNews.bind(this);
    }

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/auth/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    async handleHello() {
        try {
            const response = await axiosInstance.get('/test/get/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            console.log(response);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };
    /*Получение одной новости*/
    async handleGetNew() {
        try {
            /*Заместо 1 любое нужно число(Капитан очевидность)*/
            const response = await axiosInstance.get('/news/1/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            this.setState({
                new: response.data,
            });
            console.log(response.data);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };
    /*Получение всех новостей*/
    async handleGetNews() {
        try {
            const response = await axiosInstance.get('/news/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            this.setState({
                news: response.data,
            });
            console.log(response.data);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
                <h1>Test buttuons</h1>
                <button onClick={this.handleLogout}>Выйти</button>
                <button onClick={this.handleHello}>Hello</button>
                <button onClick={this.handleGetNew}>Get one new</button>
                <button onClick={this.handleGetNews}>Get all news</button>
            </div>
        )
    }
}

export default Test_Component;