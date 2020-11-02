import React, { useState } from 'react'
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

import icon from "../asset/school.svg"  
function MapForSchool({schools}) {
    console.log(schools, "mes props schools pour le composant map")

    const [selectSchool, setSelectSchool] = useState(null)

    return (

    <GoogleMap 
        defaultZoom={4} 
        defaultCenter={{ lat: 37.090240, lng: -95.712891 }}
    >
        {schools.map((school) => (
            <Marker 
                key={school.schoolid} 
                position={{lat:school.address.latLong.latitude , lng:school.address.latLong.longitude}} 
                onClick={() => {
                setSelectSchool(school);
                }}
                icon={{
                    url: icon,
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
           
            />
        ))}
        {selectSchool && (
            <InfoWindow 
                position={{lat:selectSchool.address.latLong.latitude , lng:selectSchool.address.latLong.longitude}}
                onCloseClick={() => {
                    setSelectSchool(null);
                }}
            >
                <div>
                    <h5>{selectSchool.schoolName}</h5>
                    <p>{selectSchool.address.street} {selectSchool.address.city}</p>
                    <p>phone: {selectSchool.phone}</p>
                </div>
            </InfoWindow>
        )}

    </GoogleMap>
    );
};

export const WrappedMap = withScriptjs(withGoogleMap(MapForSchool));

