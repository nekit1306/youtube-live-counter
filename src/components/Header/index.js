/**
 * Created by Kasutaja on 21.02.2017.
 */
import React from 'react';
import {Link} from 'react-router';

const Header = ({location, openHelp}) => (

    <div className="header">
        <div className="container">
            <div className="nav-logo">
                <h1 className="app-logo">
                    <a href="/"><img src="/images/app_logo.png"/></a>
                </h1>
            </div>
            <div className="nav-right">
                {location === 'home' &&

                    <span className="help-link" onClick={openHelp}>How it works</span>

                }
                <a href="https://github.com/nekit1306/youtube-live-counter" className="git-icon">
                    <span className="fa fa-github fa-2x"></span>
                </a>
            </div>
        </div>
    </div>

);

export default Header;