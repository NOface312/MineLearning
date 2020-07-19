import React, { Component } from "react";
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';


//Auth pages
import Login_Component from "./auth/authorization/login";
import Signup_Component from "./auth/authorization/signup";


//Profile pages
import Edit_Profile_Component from "./auth/account_settings/edit_profile";
import Edit_Password_Component from "./auth/account_settings/edit_password";
import Test_Component from "./test/test_component";

//News pages
import News_Api_Example_Component from "./news/news_api_example";

//Stude pages
import Lessons_Api_Example_Component from "./study/lessons_api_example";
import Courses_Api_Example_Component from "./study/courses_api_example";


//404
const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};


import { Access_Token_Route } from './../routes/private_auth';


class App extends Component {

    render() {
        return (
            <div className="site">
                <main>
                    <BrowserRouter>
                        <Switch>


                            <Access_Token_Route exact path={"/account/edit/data/"} component={Edit_Profile_Component} />
                            <Access_Token_Route exact path={"/account/edit/password/"} component={Edit_Password_Component} />

                            <Access_Token_Route exact path={"/test/lesson/"} component={Lessons_Api_Example_Component} />
                            <Access_Token_Route exact path={"/test/course/"} component={Courses_Api_Example_Component} />
                            <Access_Token_Route exact path={"/test/news/"} component={News_Api_Example_Component} />
                            <Access_Token_Route exact path={"/test/basic/"} component={Test_Component} />


                            <Route exact path={"/login/"} component={ Login_Component } />
                            <Route exact path={"/signup/"} component={ Signup_Component } />

                        
                            <Route component={NoMatchPage} />
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}

export default App; 