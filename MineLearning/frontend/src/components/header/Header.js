import React, { Component } from "react";
import { Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { Logout } from "../../services/api/user/auth/auth_service"
import "./Header.css"

class Header extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        hidden:true,    
                        showList: false,
                        highlightedHobby: false
                }
                this.changestate = this.changestate.bind(this);
                this.listSwitch = this.listSwitch.bind(this);
                this.logout = this.logout.bind(this);
        }
        
        changestate(){
        this.setState(prevState => ({
                showList: !prevState.showList
              }));
        }
            
        listSwitch()  {
                this.setState(state => ({
                  highlightedHobby: !state.highlightedHobby
                }));
              };

        logout() {
                Logout().then(response => {
                        location.reload();
                })
        }

    render() {
        let loggedIn=localStorage.getItem("access_token")
        return (
            <>
            <div className="header-body">
                <a href="/"><img src="/static/frontend/back/logo.png" className="header-logo" /></a>
            <form action="/forum">
                    <button type="submit" className="header-forum">Форум</button>
            </form>
            <form action="/about">
                    <button type="submit" className="header-about">О проекте</button>
            </form>
                <form action="/courses/list/">
                        <button type="submit" className="header-school" >Обучение</button>
                </form>
                <button type="submit" className="header-cabinet" onClick={this.changestate} >Кабинет</button>
                {loggedIn ?
                        <CSSTransition
                                in={this.state.showList}
                                timeout={400}
                                classNames="list-transition"
                                unmountOnExit
                                appear
                                onEntered={this.listSwitch}
                                onExit={this.listSwitch}
                                >
                                <div className="list-body">
                                <ul className="list">
                                <li className="list-item"><form action="/cabinet">
                                <button type="submit" className="header-login">Кабинет</button>
                                </form></li>
                                <li className="list-item">
                                <button type="submit" className="header-signup" onClick={this.logout}>Выйти</button>
                                </li>
                                </ul>
                                </div>
                        </CSSTransition>
                :                         
                        <CSSTransition
                                in={this.state.showList}
                                timeout={400}
                                classNames="list-transition"
                                unmountOnExit
                                appear
                                onEntered={this.listSwitch}
                                onExit={this.listSwitch}
                                >
                                <div className="list-body">
                                <ul className="list">
                                <li className="list-item"><form action="/login">
                                <button type="submit" className="header-login">Логин</button>
                                </form></li>
                                <li className="list-item"><form action="/signup">
                                <button type="submit" className="header-signup">Регистрация</button>
                                </form></li>
                                </ul>
                                </div>
                        </CSSTransition>
                }
            </div>
            </>
        );
    }
}


export default withRouter(Header);