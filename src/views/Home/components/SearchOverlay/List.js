/**
 * Created by Kasutaja on 25.01.2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';


const List = ({listItems}) => (
    <ul className="list-unstyled">
        {listItems.map((items) =>
            <li key={items.id.channelId} className="list text-left">
                <Link to={`/channel/${items.id.channelId}`}>
                    <div className="img-container">
                        <img className="img-circle" src={items.snippet.thumbnails.default.url}/>
                    </div>
                    <span>{items.snippet.channelTitle}</span>
                    <span className="arrow-right fa fa-arrow-right"></span>
                </Link>
            </li>
        )}
    </ul>
);


export default List;