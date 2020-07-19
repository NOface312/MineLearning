import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../axios/axiosAPI";
import { GetLessons, GetLesson } from './../../services/api/study/lessons_service';

class Lessons_Api_Example_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: null,
            lessons: null,
            lessons_filter: null,
            lessons_ordering: null,
        };
        this.handleGetLesson = this.handleGetLesson.bind(this);
        this.handleGetLessons = this.handleGetLessons.bind(this);
        this.handleGetLessonsBySearch = this.handleGetLessonsBySearch.bind(this);
        this.handleGetLessonsByOrdering = this.handleGetLessonsByOrdering.bind(this);
    }
    /*Получение одной новости*/
    handleGetLesson() {
        GetLesson().then(response => {
            this.setState({
                lesson: response.data
            })
        })
    };
    /*Получение всех новостей*/
    handleGetLessons() {
        GetLessons().then(response => {
            this.setState({
                lessons: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Поиск новости*/
    async handleGetLessonsBySearch() {
        GetLessons('?search=SAS').then(response => {
            this.setState({
                lessons_filter: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Расположение новости по дате*/
    async handleGetLessonsByOrdering() {
        GetLessons('?ordering=-release_date').then(response => {
            this.setState({
                lessons_ordering: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    componentDidMount() {
        this.handleGetLesson();
        this.handleGetLessons();
        this.handleGetLessonsByOrdering();
        this.handleGetLessonsBySearch();
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.lessons}
                </div>
            </div>
        )
    }
}

export default Lessons_Api_Example_Component;