import { Link } from 'react-router'

class LinkWithPanel extends React.Component {
    render() {
        return(
            <div className="link-with-panel-container">
                <Link to={this.props.to}>{this.props.name}</Link>
            </div>
        );
    }
}

LinkWithPanel.propTypes = {
    to: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    subItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            eligibleItems: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    to: React.PropTypes.string.isRequired,
                    name: React.PropTypes.string.isRequired
                }).isRequired
            ),
            prescriptionItems: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    to: React.PropTypes.string.isRequired,
                    name: React.PropTypes.string.isRequired
                }).isRequired
            )
        }).isRequired
    )
};

export default LinkWithPanel;