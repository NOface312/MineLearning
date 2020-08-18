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

//News Pages
import News_Create_Component from './news/api_components/news_create';
import News_Detail_Component from './news/api_components/news_detail';
import News_Edit_Component from './news/api_components/news_edit';
import News_List_Component from './news/api_components/news_list';

//Courses Pages
import Courses_Create_Component from './study/course/courses_create';
import Courses_Detail_Component from './study/course/courses_detail';
import Courses_Edit_Component from './study/course/courses_edit';
import Courses_List_Component from './study/course/courses_list';

//Lessons Pages
import Lessons_Create_Component from './study/lesson/lessons_create';
import Lessons_Edit_Component from './study/lesson/lessons_edit';
import Lessons_Detail_Component from './study/lesson/lessons_detail';
import Lessons_List_Component from './study/lesson/lessons_list';


//404
import NotFound from "./notfound/NotFound"

import About_Component from './about/about'

import Cabinet_Component from "./cabinet/cabinet"

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
                                <Admin_Route exact path={"/news/edit/:new"} component={News_Edit_Component} />
                                <Route path="/news/:new" component={ News_Detail_Component } />
                                <Route path="/news/" component={News_List_Component} />

                                <Admin_Route exact path={"/courses/create/"} component={Courses_Create_Component} />
                                <Admin_Route exact path={"/courses/edit/:course"} component={Courses_Edit_Component} />
                                <Access_Token_Route exact path={"/courses/detail/:course"} component={Courses_Detail_Component} />
                                <Access_Token_Route exact path="/courses/list/" component={Courses_List_Component} />

                                <Admin_Route exact path={"/lessons/create/"} component={Lessons_Create_Component} />
                                <Admin_Route exact path={"/lessons/edit/:lesson"} component={Lessons_Edit_Component} />
                                <Access_Token_Route path={"/lessons/detail/:lesson"} component={Lessons_Detail_Component} />
                                <Access_Token_Route path={"/lessons/list/:course"} component={Lessons_List_Component} />
                                
                                <Access_Token_Route exact path={"/cabinet"} component={Cabinet_Component} />

                                <Route exact path={"/login/"} component={ Login_Component } />
                                <Route exact path={"/signup/"} component={Signup_Component} />

                                <Route path="/about/" component={About_Component} />

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
