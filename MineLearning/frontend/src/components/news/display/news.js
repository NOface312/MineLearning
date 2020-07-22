import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./news.css";
import { GetNewList } from '../../../services/api/news/news_service';

class News_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
        };
        this.handleRenderPosts = this.handleRenderPosts.bind(this);
    }

    handleRenderPosts() {
        GetNewList().then(response => {
            this.setState({
                news: response.data.map((post, i) => (
                    <>
                    <div className="block">
                      <div className="title"><h4>{post.title}</h4></div>
                      <div className="text"><h5>{post.preview}</h5></div>
                      <div className="line"></div>
                      <div className="picdiv"><img className="pic" src={post.poster} /></div>
                  </div>

                    </>
                ))
            })
        })
    }

    componentDidMount() {
        this.handleRenderPosts();
    }

      render() {
        return (
        <div>
            <ul className="list-group list-group-flush">
            <div className="newsblock"><h2>Новости</h2></div>
            <div className="news" >
                {this.state.news}
                <div className="block"></div>
            </div>
            </ul>
          </div>
        );
      }
}

export default News_Component;