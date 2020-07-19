import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosApi";
import { GetNews, GetNew } from './../../services/api/news/news_service';

class News_Api_Example_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: null,
            news: null,
            news_filter: null,
            news_ordering: null,
        };
        this.handleGetNew = this.handleGetNew.bind(this);
        this.handleGetNews = this.handleGetNews.bind(this);
        this.handleGetNewsBySearch = this.handleGetNewsBySearch.bind(this);
        this.handleGetNewsByOrdering = this.handleGetNewsByOrdering.bind(this);
    }
    /*Получение одной новости*/
    async handleGetNew() {
        GetNew().then(response => {
            this.setState({
                new: response.data
            })
        })
    };
    /*Получение всех новостей*/
    handleGetNews() {
        GetNews().then(response => {
            this.setState({
                news: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Поиск новости*/
    async handleGetNewsBySearch() {
        GetNews('?search=SAS').then(response => {
            this.setState({
                news_filter: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Расположение новости по дате*/
    async handleGetNewsByOrdering() {
        GetNews('?ordering=-release_date').then(response => {
            this.setState({
                news_ordering: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    componentDidMount() {
        this.handleGetNew();
        this.handleGetNews();
        this.handleGetNewsByOrdering();
        this.handleGetNewsBySearch();
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.news}
                </div>
            </div>
        )
    }
}

export default News_Api_Example_Component;