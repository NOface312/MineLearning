import React, { Component } from "react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Access_Token_Route } from './../routes/private_auth';
import { Admin_Route } from './../routes/admin_auth';

import Footer from "./footer/Footer"
import Header from "./header/Header"

//Auth pages
import Login_Component from "./auth/authorization/login";
import Signup_Component from "./auth/authorization/signup";

//Home Page
import Landing_Component from "./landing/landing"

//Profile Pages
import Edit_Profile_Component from "./auth/account_settings/edit_profile";
import Test_Component from "./test/test_component";

//TEST PAGES
//News Pages
//import News_Api_Example_Component from "./news/news_api_example";
import News_Create_Component from './news/api_components/news_create';

//Stude Pages
import Lessons_Api_Example_Component from "./study/lessons_api_example";
import Courses_Api_Example_Component from "./study/courses_api_example";

//404
import NotFound from "./notfound/NotFound"

import "./App.css"



class App extends Component {

    render() {
        return (
            <div className="site">
                <Header />
                    <main>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path={"/"} component={Landing_Component} />

                                <Access_Token_Route exact path={"/account/edit/data/"} component={Edit_Profile_Component} />

                                <Admin_Route exact path={"/news/create/"} component={News_Create_Component} />

                                <Access_Token_Route exact path={"/test/lesson/"} component={Lessons_Api_Example_Component} />
                                <Access_Token_Route exact path={"/test/course/"} component={Courses_Api_Example_Component} />
                                <Access_Token_Route exact path={"/test/basic/"} component={Test_Component} />

                                <Route exact path={"/login/"} component={ Login_Component } />
                                <Route exact path={"/signup/"} component={ Signup_Component } />

                                <Route component={NotFound} />
                            </Switch>
                        </BrowserRouter>
                    </main>
                <Footer />
            </div>
        );
    }
}

export default App;
