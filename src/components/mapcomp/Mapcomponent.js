import React, { useRef, useEffect } from 'react'
import MapList from './MapList'

let map;
const MapComponent = ({center}) => {

    const kakao = window.kakao

    const mapCenter = new kakao.maps.LatLng(center.lat, center.lng)
    if(map) {
        map.panTo(mapCenter)
    }

    const mapRef = useRef()
    const style = {
        width: "100vw",
        height: "50vh",
        backgroundColor: 'lightgray'
    }

    useEffect(() => {
        const mapOptions = {
            center: new kakao.maps.LatLng(center.lat, center.lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }
        map = new kakao.maps.Map(mapRef.current, mapOptions)
    },[])


    return (
        <div ref={mapRef} style={style}>
            <h1>Map Div</h1>
        </div>
    )
}

export default MapComponent