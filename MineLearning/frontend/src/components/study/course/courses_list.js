import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./courses.css";
import { GetCourseList } from '../../../services/api/study/courses_service';

class Courses_List_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
        };
        this.handleRenderCoursesBlock = this.handleRenderCoursesBlock.bind(this);
    }

    handleRenderCoursesBlock() {
        GetCourseList().then(response => {
            this.setState({
                news: response.data.map((post, i) => (
                    <>
                        <div className="block">
                            <div className="title"><h4>{post.title}</h4></div>
                            <div className="text"><h5>{post.preview}</h5></div>
                            <div className="line">{post.content}</div>
                            <div className="picdiv"><img className="pic" src={post.poster} /></div>
                        </div>

                    </>
                ))
            })
        })
    }

    componentDidMount() {
        this.handleRenderCoursesBlock();
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

export default Courses_List_Component;
