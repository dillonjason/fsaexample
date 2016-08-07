import { Link } from 'react-router'
import LinkWithPanel from './link-with-panel'

class LeftSideBar extends React.Component {
    render() {
        return (
            <div className="left-side-bar-container">
                {this.props.title &&
                    <div className="title">{this.props.title}</div>
                }

                {this.props.specialLink &&
                    <Link to={this.props.specialLink.to} className="specialLink">{this.props.specialLink.name}</Link>
                }

                <ul className="items-list">
                    {this.props.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <LinkWithPanel
                                    to={item.to}
                                    name={item.name}
                                    panelItems={item.subItems}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

LeftSideBar.propTypes = {
    title: React.PropTypes.string,
    specialLink:  React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        to: React.PropTypes.string.isRequired
    }),
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            to: React.PropTypes.string.isRequired,
            subItems: React.PropTypes.object
        }).isRequired
    ).isRequired
};

LeftSideBar.defaultProps = {
    title: '',
    specialLink: null
};

export default LeftSideBar;