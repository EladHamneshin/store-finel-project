import { Location } from "../types/location";



async function getLocationInfo(lat: number, lon: number): Promise<{ name: string, address: string, imgUrl: string }> {
    const apiKey = import.meta.env.VITE_API_KEY_LOCATION;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("location: ", data);

        if (data.results && data.results.length > 0) {
            const place = data.results[0];
            const name = place.address_components[3].long_name;
            const address = place.formatted_address;
            const photoReference = place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null;
            let imgUrl = '';

            if (photoReference) {
                imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
            } else{
                imgUrl = "https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            console.log({ name, address, imgUrl });

            return { name, address, imgUrl };
        } else {
            return { name: 'Unknown', address: 'Unknown', imgUrl: '' };
        }
    } catch (error) {
        console.error('Error fetching location info:', error);
        return { name: 'Unknown', address: 'Unknown', imgUrl: '' };
    }
}



export const getLocationsInfo = async (locations: Location[]): Promise<Location[]> => {
    const locationsInfo: Location[] = [];

    for (const location of locations) {
        const { lat, lon } = location;

        const locationInfo = await getLocationInfo(lat, lon)

        locationsInfo.push({
            lat: lat,
            lon: lon,
            name: locationInfo.name,
            address: locationInfo.address,
            imgUrl: locationInfo.imgUrl
        });
    }

    return locationsInfo;
}

