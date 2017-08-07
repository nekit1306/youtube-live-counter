    /**
 * Created by Kasutaja on 26.01.2017.
 */
import axios from 'axios';

const searchUrl = 'https://www.googleapis.com/youtube/v3/search';
const channelsUrl = 'https://www.googleapis.com/youtube/v3/channels';

// Api Key or use your own
const API_KEY = 'AIzaSyCoH-ezyKbGyi5q3Owh2Re7OQr8ciWyDUU';



// Get youtube channel
export function search(q,cb) {

    let params = {
        part: 'snippet',
        q:q,
        key:API_KEY,
        maxResults: 10,
        type: 'channel'
    };

    axios.get(searchUrl, {params: params})
        .then(function (response) {
            if (cb) {
                cb(response.data.items);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}


// Get youtube channel info
export function getChannelInfo(channelId,cb) {

    let params = {
        part: 'snippet,statistics',
        id:channelId,
        key:API_KEY
    };

    axios.get(channelsUrl, {params: params})
        .then(function (response) {
            if (cb) {
                cb(response.data.items);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Get youtube channel subscribers
export function getChannelSubscribers(channelId,cb) {

    let params = {
        part: 'statistics',
        id:channelId,
        key:API_KEY
    };

    axios.get(channelsUrl, {params: params})
        .then(function (response) {
            if (cb) {
                cb(response.data.items[0].statistics);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}







