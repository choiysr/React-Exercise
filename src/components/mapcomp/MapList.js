import React from 'react'

const MapList = ({ points, showPoint}) => {
    const list = points.map(point => <li key={point.no} onClick={()=>{{showPoint(point)}}}>{point.name}</li>)
    return (
        <ul className="pointsUl">
            {list}
        </ul>
    )
}

export default MapList