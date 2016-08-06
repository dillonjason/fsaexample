class DynamicSelect extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentName: props.options[0].name
        };
    }
    
    onSelectChange = (e) => {
      this.setState({currentName: this.props.options.find(item => item.value === e.target.value).name});
    };
    
    render() {
        return(
            <div className="dynamic-select-container">
                <div className="select-result">
                    {this.state.currentName}
                    <i className="material-icons">keyboard_arrow_down</i>
                </div>
                <select onChange={this.onSelectChange}>
                    {
                        this.props.options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)
                    }
                </select>
            </div>
        );
    }
}

DynamicSelect.propTypes = {
    options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default DynamicSelect