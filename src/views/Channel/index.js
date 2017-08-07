
import React, { Component } from 'react';
import {getChannelInfo, getChannelSubscribers} from './../../utills/helpers';
import CounterType from './components/CounterType/index';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './../../components/Header/index';
import Footer from './../../components/Footer/index';


class Channel extends Component
{

    constructor(props){
        super(props);
        this.state = {
            channelInfo: [],
            channelSubscribers : {},
            intervalId : '',
            activeType: 1
        };
    }

    componentDidMount=()=>{
        this.getChannelInfo();
    };

    componentWillUnmount=()=>{
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId : ''
        });
    };


    handleClick=(typeId)=>{
        this.setState({activeType: typeId});
    };

    // Checking Subscribers every second
    setUpdateInterval=()=>{
        let intervalId = setInterval(this.checkForSubscribers, 1000);
        this.setState({
            intervalId : intervalId
        });
    };


    // Get youtube subscribers count
    checkForSubscribers=()=> {
            getChannelSubscribers(this.props.params.channelId,(channelInfo) => {

                if (!_.isEqual(channelInfo, this.state.channelSubscribers)) {
                    this.setState({
                        channelSubscribers: channelInfo
                    });
                }
            });
    };

    // Get youtube channel info
    getChannelInfo=()=> {
            getChannelInfo(this.props.params.channelId,(channelInfo) => {

                this.setState({
                    channelInfo: channelInfo,
                    channelSubscribers: channelInfo[0].statistics
                });
                this.setUpdateInterval();
            });
    };


    // Convert numbers to comma separated
    numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    checkType=(items, index)=>{

        switch (index) {
            case 1:
                return {type: 'subscribers' ,count: this.numberWithCommas(items.subscriberCount)};
            case 2:
                return {type: 'total view' , count : this.numberWithCommas(items.viewCount)};
            case 3:
                return {type:'comments', count: this.numberWithCommas(items.commentCount)};
        }
    };

    render(){

        const {channelInfo} = this.state;
        const {channelSubscribers} = this.state;
        const {activeType} = this.state;

        const channelUrl = `http://www.youtube.com/channel/${this.props.params.channelId}`;

        return(

            <div className="channel-page">
                <Header location="channel"/>
                <div className="wrapper">
                    <div className="height-centered">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                {channelInfo.length ? (
                                    <div className="max-width-container">
                                        <div className="channel-content">
                                            <div className="channel-image">
                                                {channelInfo.map((item) =>
                                                <a key={item.id} className="img-container" href={channelUrl} >
                                                    <img className="img-circle" src={item.snippet.thumbnails.medium.url}/>
                                                </a>
                                                )}
                                            </div>
                                            {channelInfo.map((item) =>
                                                <div key={item.id} className="channel-title">
                                                    <h2>{item.snippet.title}</h2>
                                                    <p>Live YouTube {this.checkType(channelSubscribers,activeType).type} count</p>
                                                        <h1>
                                                            {this.checkType(channelSubscribers,activeType).count}
                                                        </h1>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    ) : (
                                    <div>
                                        <span className='fa fa-spinner fa-spin fa-3x'></span>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="count-type-translate"
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}
                    transitionAppearTimeout={500}
                    component="span">
                <CounterType activeType={activeType} onIconClick={this.handleClick}/>
                </ReactCSSTransitionGroup>
                <Footer />
            </div>
        )
    }
}

export default Channel;