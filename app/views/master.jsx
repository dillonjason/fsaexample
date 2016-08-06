import View from '../libs/view'
import Navbar from '../components/nav/navbar'
import SearchBar from '../components/search-bar'

class Master extends React.Component {
    render() {
        return (
            <View>
                <Navbar
                    navItems={[
                        {name: 'Contact Us', to: '/ContactUs'},
                        {name: 'FAQ', to: '/FAQ'},
                        {name: 'FSA Perks', to: '/FSAPerks'}
                    ]}
                />

                <SearchBar />

                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </View>
        );
    }
}

export default Master;