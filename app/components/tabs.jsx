class Tabs extends React.Component {
    render() {
        return(
            <div className="tabs-component">
                <ul>
                    {this.props.children.map((tab, index) => {
                        return(
                            <li key={index}>
                                {tab}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Tabs;