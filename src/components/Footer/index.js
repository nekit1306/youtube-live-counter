/**
 * Created by Kasutaja on 21.02.2017.
 */
import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-logo">
                <span> Powered By Youtube <i className="fa fa-youtube"></i></span>
            </div>
            <div className="footer-share">
                <div className="full-share">
                    <span>Share on </span>
                    <a className="fb" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//ylc.surge.sh">Facebook</a>
                    <a className="tw" href="https://twitter.com/home?status=http%3A//ylc.surge.sh">Twitter</a>
                    <a className="gp" href="https://plus.google.com/share?url=http%3A//ylc.surge.sh">Google +</a>
                </div>
                <div className="mobile-share">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//ylc.surge.sh"><span className="fb fa fa-facebook"></span></a>
                    <a href="https://twitter.com/home?status=http%3A//ylc.surge.sh"><span className="fa tw fa-twitter"></span></a>
                    <a href="https://plus.google.com/share?url=http%3A//ylc.surge.sh"><span className="fa gp fa-google-plus"></span></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;