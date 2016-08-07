class TopSellerSummary extends React.Component {
    render() {
        return(
            <div className="top-seller-summary-component">
                <div className="title">
                    {this.props.title}
                </div>

                {this.props.listPrice !== 0 &&
                    <div className="list-price">
                        List Price: $<span className="strike">{parseFloat(this.props.listPrice).toFixed(2)}</span>
                    </div>
                }

                {this.props.listPrice === 0 &&
                    <div>&nbsp;</div>
                }

                <div className="our-price">
                    Our Price: ${parseFloat(this.props.ourPrice).toFixed(2)}
                </div>

                {this.props.isFSA &&
                    <div className="fsa-approved">
                        FSA Eligible!
                    </div>
                }

                <button type="button" className="pure-button">Add to Cart</button>
            </div>
        );
    }
}

TopSellerSummary.propTypes = {
    title: React.PropTypes.string.isRequired,
    listPrice: React.PropTypes.number,
    ourPrice: React.PropTypes.number.isRequired,
    isFSA: React.PropTypes.bool
};

TopSellerSummary.defaultProps = {
    listPrice: 0,
    isFSA: true
};

export default TopSellerSummary;