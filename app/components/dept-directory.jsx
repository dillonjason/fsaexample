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
                            {name: 'Diabetes Care', to: '/DiabetesCare', subItems: {
                                    eligibleItems: [
                                        {name: 'Blood Glucose Testing', to:'/DiabetesCare/SomePlace'},
                                        {name: 'Diabetes Care Accessories', to:'/DiabetesCare/SomePlace'},
                                        {name: 'Diabetes Nutritionals, Etc', to:'/DiabetesCare/SomePlace'},
                                        {name: 'Insulin, Syringes & Delivery Systems', to:'/DiabetesCare/SomePlace'},
                                        {name: 'Urine Testing', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'Diabetes HBC & Supplies', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Diagnostic Products', to: '/DiagnosticProducts', subItems: {
                                    eligibleItems: [
                                        {name: 'Blood Pressure Monitors', to:'/DiagnosticProducts/SomePlace'},
                                        {name: 'Home Tests', to:'/DiagnosticProducts/SomePlace'},
                                        {name: 'Stethoscopes', to:'/DiagnosticProducts/SomePlace'},
                                        {name: 'Thermometers', to:'/DiagnosticProducts/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Digestive Health', to: '/DigestiveHealth', subItems: {
                                    eligibleItems: [
                                        {name: "Children's Antacids/Laxatives", to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Laxatives', to:'/DigestiveHealth/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'Acid Controllers', to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Anti-Diarrheals', to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Anti-Gas', to:'/DigestiveHealth/SomePlace'},
                                        {name: "Children's Antacids/Laxatives", to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Digestive Aids', to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Hemorrhoidal Preparations', to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Laxatives', to:'/DigestiveHealth/SomePlace'},
                                        {name: 'Stomach Remedies', to:'/DigestiveHealth/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Braces & Elastic Supports', to: '/BracesElasticSupports', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Eye/Ear Care', to: '/EyeEarCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Family Planning', to: '/FamilyPlanning', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Feminine Care', to: '/FeminineCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'First Aid', to: '/FirstAid', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Foot Care', to: '/FootCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Glasses', to: '/Glasses'},
                            {name: 'Hi-Tech Health', to: '/HiTechHealth'},
                            {name: 'Home Health Care', to: '/HomeHealthCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Oral Care', to: '/OralCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Pain Relief', to: '/PainRelief', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Skin & Personal Care', to: '/SkinPersonalCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Smoking Deterrents', to: '/SmokingDeterrents', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Sun Care', to: '/SunCare', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            },
                            {name: 'Dermatological Sunscreen', to: '/Dermatological'},
                            {name: 'Vitamins & Supplements', to: '/Vitamins', subItems: {
                                    eligibleItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ],
                                    prescriptionItems: [
                                        {name: 'SomePlace', to:'/DiabetesCare/SomePlace'}
                                    ]
                                }
                            }
                        ]}
            />
        );
    }
}

export default DeptDirectory;