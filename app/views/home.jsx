import SearchBar from '../components/search-bar'
import DeptDirectory from '../components/dept-directory'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <SearchBar />

                <div className="pure-g">
                    <div className="pure-u-1-6">
                        <DeptDirectory />
                    </div>

                    <div className="pure-u-1-2 general-margin-left">
                        <h2>Home</h2>
                    </div>

                    <div className="pure-1-4">

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;