import React from 'react';
import axios from 'axios';

const API = 'https://museos-api.herokuapp.com/api/museos?populate=%2A';

function useInitialState (){
    const [museos, setMuseos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [latlong, setLatlong] = React.useState([[-19.58095178548544, -65.74869705383146]])
    const [location, setLocation] = React.useState(false);
    const [positionMuseo, setPositionMuseo] = React.useState(0);
    const [position, setPosition] = React.useState(null)

    // const [position, setPosition] = React.useState(null);
    // const map = useMapEvents({
    //     click() {
    //       console.log('le diste click');
    //     },
    //     locationfound(e) {
    //      setPosition(e.latlng)
    //       map.flyTo(e.latlng, map.getZoom())
    //     },
    //     })
        // const map2 = useMap()
        // React.useEffect(()=> {
        //   map2.locate()
        //   setLocation(false)
        // },[location])
    

    React.useEffect(() => {
        const getData = async () => {
        const response = await axios(API);
        setMuseos(response.data.data)
        if(response.status === 200){
            setLoading(false)
        }
        }
        getData();
    } ,[])

    React.useEffect(()=>{
        if(museos.length !== 0){
            const coordinates = museos.map(museo => museo.attributes.coordinates);
            setLatlong(coordinates);
        }
    }, [museos])

    





    return {
        museos,
        loading,
        latlong,
        location,
        positionMuseo,
        position,
        setLocation,
        setPositionMuseo,
        setPosition,
    }
}

export default useInitialState;