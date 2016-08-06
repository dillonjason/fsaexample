import View from '../libs/view'
import Navbar from '../components/nav/navbar'

class Master extends React.Component {
    render() {
        return (
            <View>
                <Navbar
                    navItems={[
                        {name: 'Contact Us', to: '/ContactUs'},
                        {name: 'FAQ', to: '/FAQ'},
                        {name: 'FSA Perks', to: '/FSAPerks'},
                        {name: 'Log In', to: '/LogIn'}
                    ]}
                />

                

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