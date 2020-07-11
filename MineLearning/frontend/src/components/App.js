import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Test_Component from "./test/test_component";

class App extends Component {

    render() {
        return (
            <div className="site">
                <main>
                    <Switch>

                        <Route exact path={"/test/"} component={Test_Component} />

                        <Route exact path={"/login/"} component={ Login } />
                        <Route exact path={"/signup/"} component={ Signup } />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;