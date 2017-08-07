/**
 * Created by Kasutaja on 27.02.2017.
 */
import React, { Component } from 'react';
import List from './List';
import {search} from './../../../../utills/helpers';
import CloseIcon from '../CloseIcon';

class SearchOverlay extends Component {

    constructor(props){
        super(props);
        this.state = {
            q : '',
            listItems: [],
            isActive: false
        }
    }

    // Receive props from fake input
    componentWillReceiveProps=(nextProps)=>{
        if(nextProps.q !== '' && this.state.q === '') {
            this.setState({
                q: nextProps.q,
                isActive: true
            });

            this.search(nextProps.q);
        }
    };


    // Sets focus on Full-screen input
    componentDidUpdate=(prevProps, prevState)=>{

        if(!prevState.isActive && this.state.isActive) {
            setTimeout(function () {
                this.refs.searchoverlay.focus();
            }.bind(this), 100);
        }
    };




    handleChange=(e)=>{

        const query = e.target.value;

        this.setState({
            q: query
        });

        if (query === '') {

            this.setState({
                listItems: [],
                isActive: false
            });

            this.props.clearOverlay();

        } else {
            this.search(query);
        }
    };

    // Exit full-screen input
    handleExit=()=>{
        this.setState({
            q: '',
            listItems: [],
            isActive: false
        });
        this.props.clearOverlay();
    };


    // Search youtube channels
    search = (q) => {
        search(q,(val) => {
            if(this.state.q !== '') {
                this.setState({
                    listItems: val
                });
            }
        });

    };




    render(){

        const isActive = this.state.q !== '';

        return (
            <div className={"overlay " + (isActive ? 'is-active' : '')}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-left">
                            <div className="overlay-title">
                                <h1><span className="main-color">Youtube </span>channel`s</h1>
                                <p>
                                    To get started, type any Youtube channel you want.
                                </p>
                            </div>
                            <div className="form-group input-wrapper">
                                <input className='form-control' type="text" ref='searchoverlay' value={this.state.q}  onChange={this.handleChange}/>
                            </div>
                            <div className="list-items">
                                <List listItems={this.state.listItems}/>
                            </div>
                            <div className="exit" onClick={this.handleExit}>
                                < CloseIcon color = "#fff" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchOverlay;