import NavItem from './nav-item'
import { Link } from 'react-router'
import Logo from '../../images/fsaLogo.png'

class Navbar extends React.Component {
    generateMenuList = (ref) => {
        return (
            <ul className="pure-menu-list" ref={ref ? ref : ""}>
                {this.props.navItems.map((item, index) => {
                    return <NavItem to={item.to} icon={item.icon} key={index}>{item.name}</NavItem>
                })}
            </ul>
        );
    };

    render() {
        return(
            <div className="fsa-nav">
                <div className="pure-menu pure-menu-horizontal">
                    <div className="mobile-toggle">
                        <s className="bar"></s>
                        <s className="bar"></s>
                        <s className="bar"></s>
                    </div>
                    <Link to="/" className="pure-menu-heading pure-menu-link"><img src={Logo} alt="FSA Store" /></Link>
                    {this.generateMenuList()}
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {
    navItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            to: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string
        }).isRequired
    ).isRequired
};

export default Navbar;