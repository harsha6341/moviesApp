import React,{useState} from "react";
import {useLocation,useNavigate} from "react-router-dom"

const EditMovie = (props) => {
    const location = useLocation()
    const Navigate = useNavigate()
    const{id,name,type}=location.state.data
    const[newMovie,setNewMovie]=useState(name)
    const[newGenre,setNewGenre]=useState(type)
    const onEditMovie = ()=> {
        if(newMovie===""||newGenre==="")
        {
            alert("All fileds are required")
        }
        const movie={
            name:newMovie,type:newGenre,id:id
        }
        props.onEditMovieHandler(movie);
        Navigate("/movielist")
        setNewMovie("")
        setNewGenre("")
    
      }

    return(<div>
         <div className="container">
      <h5>Check Your Movie</h5>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter the movie"
          name="name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
      </div>
      <div>
      <button type="button" className="btn btn-primary" onClick={onEditMovie}>Edit MOVIE</button>
      </div>
      <div class="h4 pb-2 mt-4 text-danger border-bottom border-danger"></div>
    </div>
        
    </div>)
}
export default EditMovie;