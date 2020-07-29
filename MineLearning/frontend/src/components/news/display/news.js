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
        this.handleRenderNewsBlock = this.handleRenderNewsBlock.bind(this);
    }
    handleRenderNewsBlock() {
        GetNewList().then(response => {
            this.setState({
                news: response.data.map((post, i) => (
                    <>
                        <table className="block">
                            <tr>
                                <td>
                                    <div className="picdiv"><img className="pic" src={post.poster} /></div>
                                </td>
                                <td>
                                    <div className="title">{post.title}</div>
                                    <div className="text" dangerouslySetInnerHTML={{__html: post.preview}}/>
                                </td>
                            </tr>
                        </table>
                    </>
                ))
            })
        })
    }

    componentDidMount() {
        this.handleRenderNewsBlock();
    }

      render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    <div className="newsblock"><h2>Новости</h2></div>
                    {this.state.news}
                </ul>
            </div>
        );
      }
}

export default News_Component;
