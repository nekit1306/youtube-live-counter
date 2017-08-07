/**
 * Created by Kasutaja on 10.03.2017.
 */
import React from 'react';
import CloseIcon from '../CloseIcon';

const Help = ({closeHelp}) => (
    <div className="help-slide">
            <div className="help-wrapper">
            <h1 className="help-title target">
                <span className="main-color">YouTube</span> live counter
            </h1>
            <p className="target">
                The subscriber count displayed on YouTube is often incorrect because it doesn't update in realtime. That's why we developed the YouTube Live Counter.
                The YouTube live counter is the best way to stay up to date with YouTube achievements because the data is realtime.
                Besides the live YouTube subscriber count, you can also get statistics like the subscriber count that YouTube shows, the total amount of channel views and the total amount of comments.
                Our data comes straight from the YouTube API which makes it 100% accurate. You will no longer miss any milestones!
            </p>
            <h1 className="help-title target">
                How does it <span className="main-color">work?</span>
            </h1>
            <p className="target">
                Enter your YouTube name or username press search.
                The counter gets your live data
                Feel free to share your data on Twitter , Facebook or Google Plus!
            </p>
            <div className="close-help-icon" onClick={closeHelp}>
                <CloseIcon color = "#333" />
            </div>
        </div>
    </div>
);

export default Help
