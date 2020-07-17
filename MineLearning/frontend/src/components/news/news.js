import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosAPI";
import "./news.css"

class News_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: null,
            news: null,
        };
        this.handleGetNew = this.handleGetNew.bind(this);
        this.handleGetNews = this.handleGetNews.bind(this);
    }
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

    async news() {
        console.log("mount")
        try {
            const response = await axiosInstance.get('/news/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            this.setState({
                news: response.data,
            });
            this.state.news = response.data;
            console.log(this.state.news);
            console.log(response.data);
            return (
                <>
                    {response.data.map((news, index) => {
                    return <div className="news"><div>{news.title}</div>
                    <div>{news.preview}</div>
                <div>{index}</div></div>
                })}
                </>
            )
        }
        catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.renderPosts();
      }
      
      async renderPosts() {
        try {
          const res = await axiosInstance.get('/news/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
          let nws = res.data;
          // this will re render the view with new data
          this.setState({
            news: nws.map((post, i) => (
              <><div>{post.title}</div>
              <div>{post.preview}</div>
              </>
            ))
          });
        } catch (err) {
          console.log(err);
        }
      }
      
      render() {
        return (
          <div>
            <ul className="list-group list-group-flush">
            <div className="news" >
                {this.state.news}
            </div>
            </ul>
          </div>
        );
      }
}

export default News_Component;