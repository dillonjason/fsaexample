import SearchBar from '../components/search-bar'
import DeptDirectory from '../components/dept-directory'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <SearchBar />
                <DeptDirectory />
            </div>
        );
    }
}

export default Home;