import React, { useEffect } from 'react'
import { Marker, Popup, useMap, useMapEvents  } from 'react-leaflet'
import AppContext from '../context/AppContext';

function Pointer(){
  const {location, setLocation, setPosition} = React.useContext(AppContext);
  const map = useMapEvents({
    click() {
      console.log('le diste click');
    },
    locationfound(e) {
     setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
    })
    const map2 = useMap()
    useEffect(()=> {
      map2.locate()
      setLocation(false)
    },[location])
    
    return (
      <Marker position={[67, 91]}>
        <Popup>
          hola
        </Popup>
      </Marker>
    )
}
export default Pointer;

