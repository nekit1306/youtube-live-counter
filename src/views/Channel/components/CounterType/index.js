/**
 * Created by Kasutaja on 21.02.2017.
 */
import React from 'react';
import TypeSubscribers from './TypeSubscribers';
import TypeView from './TypeView';
import TypeComments from './TypeComments';


const CounterType = ({activeType, onIconClick}) => {

    const typeId = [1, 2, 3];

    return (
        <div className="count-type">
            <ul className="list-unstyled">
                <li className="type">Type</li>
                <li>
                    <span className={"type-spot " +(activeType === 1 ? "type-active" : "")}  onClick={()=>onIconClick(typeId[0])}>
                        <TypeSubscribers />
                        <span className="tooltiptext">Subscribers</span>
                    </span>
                </li>
                <li>
                    <span className={"type-spot " +(activeType === 2 ? "type-active" : "")} onClick={()=>onIconClick(typeId[1])}>
                        <TypeView />
                        <span className="tooltiptext">Total View</span>
                    </span>
                </li>
                <li>
                    <span className={"type-spot " +(activeType === 3 ? "type-active" : "")} onClick={()=>onIconClick(typeId[2])}>
                        <TypeComments />
                        <span className="tooltiptext">Comments</span>
                    </span>
                </li>
            </ul>
        </div>
    )
};

export default CounterType;


