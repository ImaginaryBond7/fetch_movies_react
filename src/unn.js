import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
const { default: axios } = require("axios");
const { useEffect, useState } = require("react");
const { render } = require("react-dom");

function App() {
  // const [movies, setMovies] = useState([]);

  //     const getMovies = async () => {
  //         const resp = await axios.get('https://omdbapi.com/?apikey=bb4f0600&s=har')
  //         console.log(resp)
  //         setMovies(resp.data.Search)
  //     }

  // useEffect(function() {
  //     getMovies();
  // }, [])
  const [movies, setMovies] = useState([
    {
        Title: 'Star Wars: Episode V - The Empire Strikes Back',
        Year: '1980',
        imdbID: 'tt0080684',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
]);
const [searchValue, setSearchValue] = useState("");



  return (
    <>
    {/* {movies.map((movie) => {
        return <p>{movie.Title}</p>
    })} */}
      {/* <input type="text"  />
        <button>Search</button>
        <h1>Movies List</h1> */}
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} searchValue={searchValue} setSearchValue={setSearchValue} />} />
        <Route path="about/:imdbID" element={<About movies={movies} setMovies={setMovies}/>} />
      </Routes>
      {/* {
    movies.map((movie) => {
        return <p>{movie.Title}</p>
    })
    } */}
    </>
  );
}
const Home =(props) => {
//   const [movies, setMovies] = useState([
//     {
//         Title: 'Star Wars: Episode V - The Empire Strikes Back',
//         Year: '1980',
//         imdbID: 'tt0080684',
//         Type: 'movie',
//         Poster:
//             'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Star Wars: Episode VI - Return of the Jedi',
//         Year: '1983',
//         imdbID: 'tt0086190',
//         Type: 'movie',
//         Poster:
//             'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
//     },
// ]);
  

  const searchMovie = async () => {
        const resp = await axios.get('https://omdbapi.com/?apikey=bb4f0600&s='+ props.searchValue )
        // console.log(resp)
        props.setMovies(resp.data.Search)
    }
    // getMovies()


  return (
    <>

      <input type="text" value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)} />
      <button onClick={searchMovie}>Search</button>
      {/* {props.searchValue} */}
      <h1>Movies List</h1>

      {props.movies.map((movie) => {
        return (
        <Link to={`/about/${movie.imdbID}`}>
          <img src={movie.Poster}></img>
          <p>{movie.Title}</p>
        </Link>
        )  
      })}

      {/* <nav>
        <Link to="/about">About</Link>
      </nav> */}
    </>
  );
}

const About= (props)=> {
  let params = useParams();
  // console.log("http://www.omdbapi.com/?apikey=bb4f0600&i=" + params.imdbID)
  useEffect(() => {
    // console.log("http://www.omdbapi.com/?apikey=bb4f0600&i=" + params.imdbID)
    fetch("http://www.omdbapi.com/?apikey=bb4f0600&i=" + params.imdbID)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  // let a = async() => { 
  //   const resp = await axios.get("http://www.omdbapi.com/?apikey=bb4f0600&i="+params.imdbID) 
  //   props.setMovies(resp.data)
  // }
  // console.log(props.setMovies)
  return(<div>
    {props.movie ? <>
                <div className="desc-container">
                    <div className="desc-poster">
                        <img src={props.movie.Poster} className="poster"/>
                    </div>
                    <div className="desc-text">
                        <h2>{props.movie.Title}</h2>
                        <p className="plot">{props.movie.Plot}</p>
                        <p><a>Actors</a> : {props.movie.Actors}</p>
                        <p><a>Released</a> : {props.movie.Released}</p>
                        <p><a>IMDB Ratings</a> : {props.movie.imdbRating}</p>
                        <p><a>Runtime</a> : {props.movie.Runtime}</p>
                    </div>
                </div>
            </> : <h1>Loading...</h1>}
 </div>); 
}
// )list all the movies click and show it's detail // can add favourite button

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
