import DynamicSelect from './dynamic-select'

class SearchBar extends React.Component {
    render() {
        return(
            <div className="search-bar-container">
                <div className="search-bar-width-restrict">
                    <DynamicSelect
                        options={[
                            {name: 'All Products', value: 'all'},
                            {name: 'FSA Eligible Products', value: 'eligible'},
                            {name: 'FSA Eligible with Prescription', value: 'prescription'}
                        ]}
                    />

                    <div className="button-container">
                        <button type="button" className="pure-button">Go</button>
                    </div>

                    <div className="input-container">
                        <div className="input">
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default SearchBar;