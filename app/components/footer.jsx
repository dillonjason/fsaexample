import Divider from './divider'
import FeaturedIn from './featured-in'
import Social from './social'
import FooterLinks from './footer-links'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-component">
                <div className="content">
                    <Divider />
                    <FeaturedIn
                        featuredIn={[
                            'CNNMoney',
                            'The New York Times',
                            'WebMD',
                            'The LA Times',
                            'Chicago Sun-Times',
                            'The New York Daily News',
                            'San Fransisco Chronicle'
                        ]}
                    />
                    <Divider />
                    <Social />
                    <Divider />
                    <FooterLinks />
                    
                </div>
            </div>
        );
    }
}

export default Footer;