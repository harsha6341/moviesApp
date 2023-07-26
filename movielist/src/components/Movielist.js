import React from "react";
import MovieCardList from "./MovieListCard";

const MovieList = (props) => {
  return props.Movies.map((item) => {
    return <MovieCardList item={item}/>;
  });
};

export default MovieList;
