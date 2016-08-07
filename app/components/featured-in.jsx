class FeaturedIn extends React.Component {
    getLastRowClass = () => {
        let remainder = this.props.featuredIn.length % 4;
        return 'pure-u-1-' + remainder;
    };

    render() {
        return(
            <div className="featured-in-component">
                <h3 className="title">
                    As Featured In
                </h3>
                <div className="pure-g grid">
                    {
                        this.props.featuredIn.map((featured, index) => {
                            let responsiveClass = 'pure-u-1-4';

                            if (index > this.props.featuredIn.length - 4)
                                responsiveClass = this.getLastRowClass();

                            return (
                                <div key={index} className={ responsiveClass + " featured" }>
                                    {featured}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

FeaturedIn.propTypes = {
    featuredIn: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default FeaturedIn;