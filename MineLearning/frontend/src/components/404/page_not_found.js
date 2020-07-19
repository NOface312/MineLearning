import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosApi";

class Page_Not_Found extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h1>404 page not found</h1>
            </div>
        )
    }
}

export default Page_Not_Found;