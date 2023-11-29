export type locationsFromDataServer = {
    lon: number;
    lat: number;
}
export type Location = {
    lon: number;
    lat: number;
    name?: string;
    address?: string;
    imgUrl?: string;
}



export type LocationRes = {
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    results: ({
        address_components: {
            long_name: string;
            short_name: string;
            types: string[];
        }[];
        formatted_address: string;
        geometry: {
            location: {
                lat: number;
                lng: number;
            };
            location_type: string;
            viewport: {
                northeast: {
                    lat: number;
                    lng: number;
                };
                southwest: {
                    lat: number;
                    lng: number;
                };
            };
        }
        place_id: string;
        plus_code: {
            compound_code: string;
            global_code: string;
        }
        types: string[];
    })[];
    status: string;
}


const locationRes = {
    plus_code: {
        compound_code: '3Q9F+88F תל אביב-יפו, ישראל',
        global_code: '8G4P3Q9F+88F'
    },
    results: [
        {
            address_components: [
                {
                    long_name: '20',
                    short_name: '20',
                    types: ["street_number"]
                },
                {
                    long_name: 'אליעזר קפלן',
                    short_name: 'אליעזר קפלן',
                    types: ['route']
                },
                {
                    long_name: 'תל אביב-יפו',
                    short_name: 'תל אביב-יפו',
                    types: ['locality', 'political']
                },
                {
                    long_name: 'מחוז תל אביב',
                    short_name: 'מחוז תל אביב',
                    types: ['administrative_area_level_1', 'political']
                },
                {
                    long_name: 'ישראל',
                    short_name: 'IL',
                    types: ['country', 'political']
                }
            ],
            formatted_address: 'יוחנן הסנדלר 2, תל אביב-יפו, ישראל',
            geometry: {
                location: {
                    lat: 32.0729974,
                    lng: 34.7856562
                },
                location_type: "ROOFTOP",
                viewport: {
                    northeast: {
                        lat: 32.0743463802915,
                        lng: 34.7870051802915
                    },
                    southwest: {
                        lat: 32.0716484197085,
                        lng: 34.7843072197085
                    },
                }
            },
            place_id: 'ChIJs58KG4JMHRURiKMJ_YfroUo',
            plus_code: {
                compound_code: "3QFP+57 תל אביב-יפו, ישראל",
                global_code: "8G4P3QFP+57"
            },
            types: ["establishment", "food", "point_of_interest"]
        },
        {
            address_components: [Array],
            formatted_address: 'יוחנן הסנדלר 6, תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'ChIJ980QHIJMHRURp3wIDdPJSMI',
            plus_code: [Object],
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'יוחנן הסנדלר/בלפור, תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'ChIJh0QPGoJMHRURq1lw6KsOKPs',
            plus_code: [Object],
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'יוחנן הסנדלר 3, תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'Ei1Zb2hhbmFuIEhhU2FuZGxhciBTdCAzLCBUZWwgQXZpdi1ZYWZvLCBJc3JhZWwiGhIYChQKEgldfeMbgkwdFRGRjrROlfV1uBAD',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: '3Q9F+88 תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'GhIJdRQxNr4IQEARr4kW6vpiQUA',
            plus_code: [Object],
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'יוחנן הסנדלר 2-8, תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'ChIJXX3jG4JMHRURkI60TpX1dbg',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'לב תל אביב, תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'ChIJlywW7X5LHRURncjGjWSvyPU',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'תל אביב-יפו, ישראל',
            geometry: [Object],
            place_id: 'ChIJH3w7GaZMHRURkD-WwKJy-8E',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'אזור תל אביב, ישראל',
            geometry: [Object],
            place_id: 'ChIJFYqCjvhIHRURfMkU1A0mkV0',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'מחוז תל אביב, ישראל',
            geometry: [Object],
            place_id: 'ChIJsTJP_rZLHRURQNXiBl_Sf9s',
            types: [Array]
        },
        {
            address_components: [Array],
            formatted_address: 'ישראל',
            geometry: [Object],
            place_id: 'ChIJi8mnMiRJABURuiw1EyBCa2o',
            types: [Array]
        }
    ],
    status: 'OK'
}