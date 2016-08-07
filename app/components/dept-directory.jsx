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
                            {name: 'Baby Care', to: '/BabyCare', subItems: {
                                    eligibleItems: [
                                        {name: 'Medela Breast Pumps & Accessories', to: '/Product/123'},
                                        {name: 'Baby Health & Essentials', to: '/BabyCare/HealthEssentials'},
                                        {name: 'Baby Sunscreen', to: '/BabyCare/Sunscreen'},
                                        {name: 'Baby Thermometers', to: '/BabyCare/Thermometers'},
                                        {name: 'Breast Pumps & Accessories', to: '/BabyCare/BreastPumps'},
                                        {name: 'Nasal Aspirators', to: '/BabyCare/NasalAspirators'},
                                        {name: 'Overnight Underpants', to: '/BabyCare/OvernightUnderpants'},
                                        {name: 'Prenatal Multivitamins', to: '/BabyCare/PrenatalMultivitamins'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'Baby Health & Beauty Care', to: '/BabyCare/HealthAndBeauty'},
                                        {name: 'Baby Nutritionals, Electrolytes & Food', to: '/BabyCare/Nutritionals'}
                                    ]
                                }
                            },
                            {name: 'Cold & Allergy', to: '/ColdAllergy', subItems: {
                                    eligibleItems: [
                                        {name: 'Allergy, Sinus & Combinations', to:'/ColdAllergy/SomePlace'},
                                        {name: "Children's Cold & Allergy", to:'/ColdAllergy/SomePlace'},
                                        {name: 'Lip Care', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Nasal', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Vaporizers', to:'/ColdAllergy/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'Adult Cough, Cold & Flu', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Allergy, Sinus & Combinations', to:'/ColdAllergy/SomePlace'},
                                        {name: "Children's Cold & Allergy", to:'/ColdAllergy/SomePlace'},
                                        {name: 'Cough Drops, Sore Throat Relief', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Lip Care', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Lip Preparations', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Nasal', to:'/ColdAllergy/SomePlace'},
                                        {name: 'Respiratory Treatments', to:'/ColdAllergy/SomePlace'}
                                    ]
                                }
                            },
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