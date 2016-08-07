import SearchBar from '../components/search-bar'
import DeptDirectory from '../components/dept-directory'
import FSATool from '../components/fsa-tool'
import Carousel from 'nuka-carousel'
import Divider from '../components/divider'
import CardList from '../components/card-list'
import TopSellerSummary from '../components/top-seller-summary'
import Tabs from '../components/tabs'
import {Link} from 'react-router'

import Banner from '../images/banner.jpg'
import Antiseptic from '../images/top-sellers/antiseptic.jpg'
import BandAid from '../images/top-sellers/band-aid.jpg'
import DrSchools from '../images/top-sellers/drschools.jpg'
import FamilyEssentials from '../images/top-sellers/family-essentials.jpg'
import FirstAid from '../images/top-sellers/first-aid.jpg'
import Ice from '../images/top-sellers/ice.jpg'
import KTTape from '../images/top-sellers/kt-tape.jpg'
import PsiBand from '../images/top-sellers/psi-band.jpg'
import Pump from '../images/top-sellers/pump.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <SearchBar />
                <Tabs>
                    <Link to="/" className="active">Primary Store</Link>
                    <Link to="/Optics">Optics Store</Link>
                </Tabs>

                <div className="pure-g">
                    <div className="pure-u-1-6">
                        <DeptDirectory />
                    </div>

                    <div className="pure-u-2-3">
                        <div className="general-margin-sides">
                            <div className="home-carousel">
                                <Carousel>
                                    <img src={Banner} />
                                    <img src={Banner} />
                                    <img src={Banner} />
                                    <img src={Banner} />
                                </Carousel>
                            </div>

                            <Divider
                                title="Top Sellers"
                            />
                            <CardList
                                images={[
                                    DrSchools,
                                    Antiseptic,
                                    FamilyEssentials,
                                    Pump,
                                    BandAid,
                                    KTTape,
                                    Ice,
                                    FirstAid,
                                    PsiBand
                                ]}
                            >
                                <TopSellerSummary
                                    title="Dr. Scholl's Massaging Gel Men's Outrageous Comfort, Size 8-13"
                                    ourPrice={13.79}
                                />
                                <TopSellerSummary
                                    title="New-Skin First Aid Antiseptic Liquid Bandage, 1 fl oz"
                                    ourPrice={6.49}
                                    listPrice={8.56}
                                />
                                <TopSellerSummary
                                    title="Family Essentials"
                                    ourPrice={236.99}
                                    listPrice={329.00}
                                />
                                <TopSellerSummary
                                    title="Medela Pump In Style Advanced Backpack Solution Set, 1 ea"
                                    ourPrice={310.99}
                                    listPrice={339.99}
                                />
                                <TopSellerSummary
                                    title="Band-Aid Sheer Variety Pack Assorted, 280 ea"
                                    ourPrice={13.99}
                                    listPrice={18.99}
                                />
                                <TopSellerSummary
                                    title="KT TAPE PRO, Pre-cut, 20 Strip, Synthetic, Stealth Beige"
                                    ourPrice={19.99}
                                />
                                <TopSellerSummary
                                    title='Battle Creek Ice It! ColdCOMFORT Neck/Jaw/Sinus System, 4.5" x 10"'
                                    ourPrice={19.99}
                                    listPrice={22.00}
                                />
                                <TopSellerSummary
                                    title="Adventure Medical First Aid Kit Comprehensive"
                                    ourPrice={182.99}
                                />
                                <TopSellerSummary
                                    title="Psi Bands Acupressure Wrist Bands - Color Play"
                                    ourPrice={18.99}
                                    listPrice={19.99}
                                />
                            </CardList>
                        </div>
                    </div>

                    <div className="pure-u-1-6">
                        <FSATool />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;