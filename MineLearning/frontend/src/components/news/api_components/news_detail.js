import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./news.css";
import { GetNewDetail } from '../../../services/api/news/news_service';

class News_Detail_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: null,
        };
        this.handleRenderNew = this.handleRenderNew.bind(this);
    }

    handleRenderNew(slug) {
        GetNewDetail(slug).then(response => {
            this.setState({
                new: 
                    <>
                        <div className="block">
                            <div className="title"><h4>{response.data.title}</h4></div>
                            <div className="text"><h5>{response.data.preview}</h5></div>
                            <div className="line">{response.data.content}</div>
                            <div className="picdiv"><img className="pic" src={response.data.poster} /></div>
                        </div>

                    </>
            })
        })
    }

    componentDidMount() {
        this.handleRenderNew(this.props.match.params.new);
    }

    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    <div className="news" >
                        {this.state.new}
                        <div className="block"></div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default News_Detail_Component;
