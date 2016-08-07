import { Link } from 'react-router'
import Divider from './divider'

class LinkWithPanel extends React.Component {
    showPanel = () => {
        if (this.refs.panel)
            this.refs.panel.style.display = '';
    };

    hidePanel = () => {
        if (this.refs.panel)
            this.refs.panel.style.display = 'none';
    };

    togglePanel = () => {
        if (this.refs.panel)
            this.refs.panel.style.display = this.refs.panel.style.display === 'none' ? '' : 'none';
    };

    createItemsList = (items) => {
        return (
            <div className="pure-g">
                {
                    items.map((item, index) => {
                        return <Link key={index} className="pure-u-1-2" to={item.to}>{item.name}</Link>
                    })
                }
            </div>
        );
    };

    render() {
        let showEligible = false;
        let showPresription = false;

        if (this.props.panelItems) {
            if (this.props.panelItems.eligibleItems && this.props.panelItems.eligibleItems.length > 0)
                showEligible = true;

            if(this.props.panelItems.prescriptionItems && this.props.panelItems.prescriptionItems.length > 0)
                showPresription = true;
        }

        return(
            <div className="link-with-panel-container" onMouseOver={this.showPanel} onMouseLeave={this.hidePanel}>
                <Link to={this.props.to} onTouchStart={this.togglePanel} className="primary-link">{this.props.name}</Link>
                {(showEligible || showPresription) &&
                    <div className="panel" ref="panel" style={{ display: "none" }}>
                        <h2>
                            <Link to={this.props.to}>{this.props.name}</Link>
                        </h2>
                        {showEligible &&
                            <div className="eligible-items">
                                <h4>
                                    Products eligible under your FSA without prescription
                                </h4>
                                {this.createItemsList(this.props.panelItems.eligibleItems)}
                            </div>
                        }

                        { showEligible && showPresription && <Divider /> }

                        {showPresription &&
                            <div className="prescription-items">
                                <h4>
                                    Products only reimbursed with prescription
                                </h4>
                                {this.createItemsList(this.props.panelItems.prescriptionItems)}
                            </div>
                        }
                    </div>
                }

            </div>
        );
    }
}

LinkWithPanel.propTypes = {
    to: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    panelItems: React.PropTypes.shape({
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
        })
};

export default LinkWithPanel;