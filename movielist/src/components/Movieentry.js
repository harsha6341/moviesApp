import React, { useState } from "react";
import{useNavigate} from"react-router-dom";

const MovieEntry = (props) => {
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const Navigate = useNavigate();

  const onAddMovie = ()=> {
    if(movieName===""||movieGenre==="")
    {
        alert("All fileds are required")
        return;

    }
    const movie={
        name:movieName,type:movieGenre
    }
    props.onAddMovieHandler(movie);
    Navigate("/movielist")
    setMovieName("")
    setMovieGenre("")

  }
  return (
    <div className="container">
      <h5>Check Your Movie</h5>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter the movie"
          name="name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={movieGenre}
          onChange={(e) => setMovieGenre(e.target.value)}
        />
      </div>
      <div>
      <button type="button" className="btn btn-primary" onClick={onAddMovie}>ADD MOVIE</button>
      </div>
      <div class="h4 pb-2 mt-4 text-danger border-bottom border-danger"></div>
    </div>
  );
};

export default MovieEntry;
