import React, { Component } from "react";
import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="footer-body">
                <div className="lorem" />
                <table className="links">
                    <tr>
                        <td>
                            <a href="https://vk.com/"><img src="/static/frontend/back/vk.png/" className="icons"/></a>
                        </td>
                        <td>
                            <a href="https://twitter.com/"><img src="/static/frontend/back/tw.png/" className="icons"/></a>
                        </td>
                        <td>
                            <a href="https://youtube.com/"><img src="/static/frontend/back/yt.png/" className="icons"/></a>
                        </td>
                    </tr>
                </table>
            </div>
            </>
        );
    }
}


export default Footer;