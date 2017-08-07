import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.styl';

class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            pageLoaded: false
        }
    }

    // Sets preloading icon
    componentDidMount(){
        setTimeout(function () {
            this.setState({pageLoaded: true});
        }.bind(this),2000);
    }


    render() {
        return (
            <div id="youtube-app" className={this.state.pageLoaded ? "loaded" : ""}>
                <div className="preload"></div>
                <div className="site-container">
                    <ReactCSSTransitionGroup
                        transitionName="page-appear"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        component="div"
                        className="page">
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                    <div className="overlay-rotate"></div>
                </div>
            </div>
        );
    }
}

export default App;