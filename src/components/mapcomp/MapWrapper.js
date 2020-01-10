import React, {useState} from 'react'
import MapComponent from './Mapcomponent'
import MapList from './MapList'

const MapWrapper = () => {


    const [center,setCenter] = useState({lat:37.572790,lng:126.976893})

    const points = [
        {no:1, name:'비트캠프 종로', lat:37.570667, lng:126.985273},
        {no:2, name:'바나프레소 강남', lat:37.495374, lng:127.030232},
        {no:3, name:'잠실 롯데월드타워', lat:37.513186, lng:127.102754},
        {no:4, name:'상암 월드컵경기장', lat:37.568480, lng:126.897299},
        {no:5, name:'북한산', lat:37.667685, lng:126.995319}
        ]

        const showPoint = (point) => {
            console.log(point)
            setCenter(point)
        }

    return (
        <div>
        <MapComponent center={center}></MapComponent>
        <MapList points={points} showPoint={showPoint}></MapList>
        </div>
    )
}

export default MapWrapper