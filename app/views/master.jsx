import View from '../libs/view'
import Navbar from '../components/nav/navbar'
import Footer from '../components/footer'
import Disclaimer from '../components/disclaimer'

class Master extends React.Component {
    render() {
        return (
            <View>
                <Navbar
                    navItems={[
                        {name: 'Contact Us', to: '/ContactUs', icon: 'contact_mail'},
                        {name: 'FAQ', to: '/FAQ', icon: 'question_answer'},
                        {name: 'FSA Perks', to: '/FSAPerks', icon: 'monetization_on'},
                        {name: 'Log In', to: '/LogIn', icon: 'account_box'}
                    ]}
                />
                
                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                    <Footer />
                    <Disclaimer />
                </div>
            </View>
        );
    }
}

export default Master;