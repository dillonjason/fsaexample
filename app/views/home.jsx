import SearchBar from '../components/search-bar'
import DeptDirectory from '../components/dept-directory'
import FSATool from '../components/fsa-tool'
import Carousel from 'nuka-carousel'
import Divider from '../components/divider'

import Banner from '../images/banner.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <SearchBar />

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