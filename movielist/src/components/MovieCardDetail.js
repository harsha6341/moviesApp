import React  from "react"
import {useLocation} from"react-router-dom"

const MovieCardList = (props)=>{
    const location = useLocation()
    const {id,name,type}= location.state.data
    return(
        <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{type}</div>
        </div>
    )
}

export default MovieCardList;


