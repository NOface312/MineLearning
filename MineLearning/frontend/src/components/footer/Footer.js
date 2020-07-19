import React, { Component } from "react";
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="footer-body">
                <div className="footer-name">MineLearning</div>
                <button className="footer-question">Задать вопрос</button>
                <a href="/" className="footer-mobile">Мобильная версия</a>
                <a href="/" className="footer-login">Вход для клиента</a>
                <a href="https://vk.com/" className="footer-vk">vk</a>
                <a href="https://facebook.com/" className="footer-fb">fb</a>
                <a href="https://ok.ru/" className="footer-ok">ok</a>
                <a href="https://twitter.com/" className="footer-tw">tw</a>
                <a href="https://instagram.com/" className="footer-inst">inst</a>
                <a href="https://play.google.com/" className="footer-gp">gp</a>
                <a href="https://apple.com/ru/ios/app-store/" className="footer-as">as</a>
            </div>
            </>
        );
    }
}


export default Footer;