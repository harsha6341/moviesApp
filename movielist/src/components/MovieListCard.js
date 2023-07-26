import React from "react"
import {Link} from"react-router-dom";

const MovieCardList = (props)=>{
    const {name,type,id} = props.item
    return(
            <div className="container">
        <div className="d-flex flex-row">
        <Link to={`/moviecarddetail/${id}`} state={{data:props.item}}><div className="d-flex flex-column">
                <div>{name}</div>
                <div>{type}</div>
              </div> </Link> 
              <div> 
            
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
               <Link to={`/editmoviedetails/${id}`} state={{data:props.item}}><button type="button" className="btn btn-danger">
                  Edit
                </button></Link> 
              </div>
            </div>
            </div>
    )
}

export default MovieCardList;