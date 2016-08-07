import RightSideBar from './right-side-bar'

class FSATools extends React.Component {
    render() {
        return(
            <RightSideBar
                title="FSA Tools"
                items={[
                    {name: 'Eligibility List', to: '/EligibilityList', icon: 'view_list'},
                    {name: 'Learning Center', to: '/LearningCenter', icon: 'book'},
                    {name: 'RX Process', to: '/RXProcess', icon: 'local_hospital'},
                    {name: 'FSA Calculator', to: '/FSACalculator', icon: 'school'},
                    {name: 'FSA Tracker', to: '/FSATracker', icon: 'track_changes'},
                    {name: 'FSA Perks', to: '/FSA Perks', icon: 'monetization_on'}
                ]}
            />
        );
    }
}

export default FSATools