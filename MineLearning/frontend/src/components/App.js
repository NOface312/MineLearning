import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


import Login from "./auth/authorization/login";
import Signup from "./auth/authorization/signup";


import Test_Component from "./test/test_component";
import News from "./news/news";
import Landing from "./landing/landing"

import Footer from "./footer/Footer"
import Header from "./header/Header"

import NotFound from "./notfound/NotFound"
import "./App.css"
import { Access_Token_Route } from './../routes/private_auth';


class App extends Component {

    render() {
        return (
            <div className="site">
                <Header />
                <main>
                    <Switch>
                        <Access_Token_Route exact path={"/test/"} component={Test_Component} />
                        <Route exact path={"/"} component={ Landing } />
                        <Route exact path={"/login/"} component={ Login } />
                        <Route exact path={"/signup/"} component={ Signup } />
                        <Route component={ NotFound } />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App; 