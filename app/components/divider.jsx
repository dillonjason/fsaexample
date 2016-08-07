class Divider extends React.Component {
    render() {
        return(
            <div className="divider-component">
                {this.props.title && <h3 className="title">{this.props.title}</h3>}
                <div className="line">&nbsp;</div>
            </div>
        );
    }
}

Divider.propTypes = {
    title: React.PropTypes.string
};

Divider.defaultProps = {
    title: ''
};

export default Divider;