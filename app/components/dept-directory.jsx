import LeftSideBar from './left-side-bar'

class DeptDirectory extends React.Component {
    render() {
        return(
            <LeftSideBar
                title="Departments"
                specialLink={{name: 'Sales', to: '/Sales'}}
                items={[
                            {name: 'Goodies', to: '/Goodies'},
                            {name: 'Travel Essentials', to: '/TravelEssentials'},
                            {name: 'Back 2 School', to: '/Back2School'},
                            {name: 'Bundles', to: '/Bundles'},
                            {name: 'New Arrivals', to: '/NewArrivals'},
                            {name: 'Baby Care', to: '/BabyCare'},
                            {name: 'Cold & Allergy', to: '/ColdAllergy'},
                            {name: 'Contact Lenses', to: '/ContactLenses'},
                            {name: 'Diabetes Care', to: '/DiabetesCare'},
                            {name: 'Diagnostic Products', to: '/DiagnosticProducts'},
                            {name: 'Digestive Health', to: '/DigestiveHealth'},
                            {name: 'Braces & Elastic Supports', to: '/BracesElasticSupports'},
                            {name: 'Eye/Ear Care', to: '/EyeEarCare'},
                            {name: 'Family Planning', to: '/FamilyPlanning'},
                            {name: 'Feminine Care', to: '/FeminineCare'},
                            {name: 'First Aid', to: '/FirstAid'},
                            {name: 'Foot Care', to: '/FootCare'},
                            {name: 'Glasses', to: '/Glasses'},
                            {name: 'Hi-Tech Health', to: '/HiTechHealth'},
                            {name: 'Home Health Care', to: '/HomeHealthCare'},
                            {name: 'Oral Care', to: '/OralCare'},
                            {name: 'Pain Relief', to: '/PainRelief'},
                            {name: 'Skin & Personal Care', to: '/SkinPersonalCare'},
                            {name: 'Smoking Deterrents', to: '/SmokingDeterrents'},
                            {name: 'Sun Care', to: '/SunCare'},
                            {name: 'Dermatological Sunscreen', to: '/Dermatological'},
                            {name: 'Vitamins & Supplements', to: '/Vitamins'}
                        ]}
            />
        );
    }
}

export default DeptDirectory;