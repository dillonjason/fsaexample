import { Link } from 'react-router'
import Card from './card'

class LeftSideBar extends React.Component {
    render() {
        return (
            <div className="right-side-bar-container">
                {this.props.title &&
                    <div className="title">{this.props.title}</div>
                }

                <ul className="items-list">
                    {this.props.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.to}>
                                    <Card>
                                        <div className="pure-g">
                                            <div className="pure-u-2-5 icon">
                                                <i className="material-icons">{item.icon}</i>
                                            </div>
                                            <div className="pure-u-2-5 text">
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="pure-u-1-5 arrows">
                                                &#187;
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
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
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            to: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string
        }).isRequired
    ).isRequired
};

LeftSideBar.defaultProps = {
    title: ''
};

export default LeftSideBar;