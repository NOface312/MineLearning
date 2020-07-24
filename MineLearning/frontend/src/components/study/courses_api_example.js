import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "./../../axios/axiosAPI";
import { GetCourses, GetCourse } from './../../services/api/study/courses_service';

class Courses_Api_Example_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: null,
            courses: null,
            courses_filter: null,
            courses_ordering: null,
        };
        this.handleGetCourse = this.handleGetCourse.bind(this);
        this.handleGetCourses = this.handleGetCourses.bind(this);
        this.handleGetCoursesBySearch = this.handleGetCoursesBySearch.bind(this);
        this.handleGetCoursesByOrdering = this.handleGetCoursesByOrdering.bind(this);
    }
    /*Получение одной новости*/
    handleGetCourse() {
        GetCourse().then(response => {
            this.setState({
                course: response.data
            })
        })
    };
    /*Получение всех новостей*/
    handleGetCourses() {
        GetCourses().then(response => {
            this.setState({
                courses: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Поиск новости*/
    async handleGetCoursesBySearch() {
        GetCourses('?search=SAS').then(response => {
            this.setState({
                courses_filter: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    /*Расположение новости по дате*/
    async handleGetCoursesByOrdering() {
        GetCourses('?ordering=-release_date').then(response => {
            this.setState({
                courses_ordering: response.data.map((post, i) => (
                    <><div>{post.title}</div>
                        <div>{post.preview}</div>
                    </>
                ))
            })
        })
    };

    componentDidMount() {
        this.handleGetCourse();
        this.handleGetCourses();
        //this.handleGetCoursesByOrdering();
        //this.handleGetCoursesBySearch();
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.courses}
                </div>
            </div>
        )
    }
}

export default Courses_Api_Example_Component;