class Social extends React.Component {
    render() {
        return (
            <div className="social-component">
                <div className="pure-g">
                    <div className="pure-u-1-2">
                        <div className="sign-up">
                            <input type="text" placeholder="Subscribe to Special Offers" />
                            <button className="pure-button" type="button">Submit Email</button>
                        </div>
                    </div>

                    <div className="pure-u-1-2">
                        <div className="social-media">
                            <span className="title">Follow Us: </span>
                            <span className="socicon-facebook"></span>
                            <span className="socicon-twitter"></span>
                            <span className="socicon-linkedin"></span>
                            <span className="socicon-googleplus"></span>
                            <span className="socicon-pinterest"></span>
                            <span className="socicon-youtube"></span>
                            <span className="socicon-rss"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;