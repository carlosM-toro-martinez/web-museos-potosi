import React from 'react'
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import AppContext from '../context/AppContext';

const createRoutineMachineLayer = () => {
    const {positionMuseo, position, latlong} = React.useContext(AppContext)

    
    const instance = L.Routing.control({
        waypoints: [
        L.latLng(position),
        L.latLng(latlong.length !== 1 ? latlong[positionMuseo-1] : (position))
        ],
        lineOptions: {
            styles: [
            {
                color: "black",
                opacity: 1,
                weight: 5
            }
            ]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        collapsible: true,
        summaryTemplate:'<h2>{name}</h2><h3>{distance}, {time}</h3>',
        collapseBtnClass: 'leaflet-routing-collapse-btn',
        showAlternatives: false
    
    });
    console.log(instance);
    return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;