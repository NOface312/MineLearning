import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


import Login from "./auth/authorization/login";
import Signup from "./auth/authorization/signup";


import Test_Component from "./test/test_component";
import News from "./news/news";


import { Access_Token_Route } from './../routes/private_auth';


class App extends Component {

    render() {
        return (
            <div className="site">
                <main>
                    <Switch>

                        
                        <Access_Token_Route exact path={"/news/"} component={News} />
                        <Access_Token_Route exact path={"/test/"} component={Test_Component} />

                        <Route exact path={"/login/"} component={ Login } />
                        <Route exact path={"/signup/"} component={ Signup } />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App; 