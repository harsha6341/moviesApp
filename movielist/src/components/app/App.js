import React,{useState,useEffect} from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Header from "../Header"
import MovieEntry from "../Movieentry"
import MovieList from "../Movielist"
import MovieCardList from "../MovieCardDetail"
import EditMovie from "../EditMovie"
import "./App.css"

const App = ()=>{
  const LOCAL_STORAGE_KEY="Movies";
   const [Movies,setMovies]=useState([])
  //JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))??[
  //const Movies = [{name:"Scream",type:"thriller"},{name:"Saw",type:"Comedy"}]
  const onAddMovieHandler = async (movie) =>{
       const newMovie ={id:uuidv4(),...movie}
       const response =  await axios.post("http://localhost:3006/Movies",newMovie)
        setMovies([...Movies,response.data])
      
  }
   useEffect(()=>{

    const getMoviesData = async () =>{
    const getData = await axios.get("http://localhost:3006/Movies")
    if(getData){
      setMovies(getData.data)
    }
    }
    getMoviesData();

   },[])
  
   
    const onEditMovieHandler = async (newMovie)=>{
      const resposne= await axios.put(`http://localhost:3006/Movies/${newMovie.id}`,newMovie)
 
      setMovies(
       Movies.map((movie)=>{
         return  movie.id === resposne.data.id ?resposne.data:movie
       })
      )
 
     }

   
   
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Movies))
  },[Movies])
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<MovieEntry onAddMovieHandler={onAddMovieHandler} />}
          />
          <Route path="/movielist" element={<MovieList Movies={Movies} />} />
          <Route path="/moviecarddetail/:id" element = {<MovieCardList/>}/>
          <Route path="/editmoviedetails/:id" element = {<EditMovie onEditMovieHandler={onEditMovieHandler}/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App



