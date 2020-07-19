import React, { Component } from "react";
import "./Header.css"

class Header extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        hidden:true
                }
                this.changestate = this.changestate.bind(this)

        }
        
        changestate(){
                this.setState(
                        {
                                hidden:!this.state.hidden
                        }
                )
                console.log(this.state.hidden)
        }

    render() {
        return (
            <>
            <div className="header-body">
            <form action="/">
                    <button type="submit" className="header-main">Главная</button>
            </form> 
            <form action="/about">
                    <button type="submit" className="header-payments">О проекте</button>
            </form>
            <form action="/school">
                    <button type="submit" className="header-reviews">Обучение</button>
            </form>
                <button type="submit" className="header-clients" onClick={this.changestate} >Кабинет</button>
                {!this.state.hidden && <div className="header-cabinetbuttons">
                        <form action="/login">
                        <button type="submit" className="header-login">Логин</button>
                        </form>
                        <form action="/signup">
                        <button type="submit" className="header-signup">Регистрация</button>
                        </form>
                </div>}
            </div>
            </>
        );
    }
}


export default Header;