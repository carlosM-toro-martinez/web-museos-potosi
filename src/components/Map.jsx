import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet-routing-machine";
import useInitialState from '../hooks/useInitialState';
import Header from './Header';
import Pointer from '../containers/Pointer';
import RoutingMachine from '../containers/RouterMachine';
import '../styles/components/map.css';
import AppContext from '../context/AppContext';



function Map () {
    const {positionMuseo, position, latlong} = React.useContext(AppContext)
    const state = useInitialState();
    const latLongg = state.latlong;
    

    return(
        <div className='map'>
            <Header/>
            <MapContainer className='map' center={latLongg.length === 1 || positionMuseo === 0 ?
            (latLongg[0]) : latLongg[positionMuseo-1]} zoom={15} scrollWheelZoom={false}>
                <TileLayer attribution='Carlos'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={latLongg.length === 1 || positionMuseo === 0 ?
            (latLongg[0]) : latLongg[positionMuseo-1]}>
                    <Popup>
                     <p>description of museoo</p>
                    </Popup>
                </Marker>
                <Pointer/>
            {position === null || latlong.length === 1 ? null : <RoutingMachine/>}
            </MapContainer>
        </div>
    )
};

export default Map;