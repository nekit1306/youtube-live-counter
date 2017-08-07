import React, { Component } from 'react';
import Header from './../../components/Header/index';
import Footer from './../../components/Footer/index';
import Help from './components/Help/index'
import SearchOverlay from './components/SearchOverlay/index';
import SearchTip from './components/SearchTip'
import {search} from './../../utills/helpers';



class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            q : '',
            helpActive: false
        };
    }

    // Activate Full-screen input
    searchOverlayTrigger = (e) => {

        this.setState({
            q: e.target.value
        });
    };

    // Clear fake input
    fakeInputClear=()=>{

        this.setState({
            q: ''
        });

        this.refs.home.value = "";
        this.refs.home.focus();
    };

    // Show Help page
    openHelp=()=>{
        this.setState({helpActive: true});
    };

    // Hide Help Page
    closeHelp=()=>{
        this.setState({helpActive: false});
    };


    render() {

        return (
                <div className={"home-page " + (this.state.helpActive ? "help-open" : "")} >
                    <Header location='home' openHelp={this.openHelp}/>
                    <div className="wrapper">
                        <div className="height-centered">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3">
                                        <div className="main-title">
                                            <h2>Youtube Live Counter</h2>
                                            <p className="App-intro">
                                                The YouTube live counter is the best way to stay up to date with YouTube channels in realtime.
                                            </p>
                                        </div>
                                        <div className="form-group fake-input-wrapper">
                                            <span className="fa fa-search icon-search" aria-hidden="true"></span>
                                            <input className='form-control' type="text" ref="home"  onChange={this.searchOverlayTrigger} placeholder="eg. EeOneGuy"  />
                                            <SearchTip/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sharing">
                            <h2>Would like to Share?</h2>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//ylc.surge.sh"><span className="fb fa fa-facebook fa-2x"></span></a>
                            <a href="https://twitter.com/home?status=http%3A//ylc.surge.sh"><span className="tw fa fa-twitter fa-2x"></span></a>
                            <a href="https://plus.google.com/share?url=http%3A//ylc.surge.sh"><span className="gp fa fa-google fa-2x"></span></a>
                        </div>
                    </div>
                    <Help closeHelp={this.closeHelp} />
                    <SearchOverlay clearOverlay={this.fakeInputClear} q={this.state.q} />
                    <Footer/>
                </div>
        );
    }
}

export default Home;


