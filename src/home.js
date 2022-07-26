import { useEffect, useState} from 'react'
import { Link } from "react-router-dom"

const Home =() => {

    const [movies, setMovies] = useState();
    const [search, setSearch] = useState("Star");
    
    useEffect(() => {
        fetch(`https://omdbapi.com/?apikey=bb4f0600&s=${search}`)
          .then((response) => response.json())
          .then((data) => setMovies(data));
      }, [search]);

    function searchMovie() {
        var searchedMovie = document.getElementById('search').value
        setSearch(searchedMovie);
        document.getElementById('search').value = ''
    }
    
    
      return (
        <>
        <div className='navbar'>
            <Link to={'/'}> <h1>Get movies</h1> </Link>
        </div>
        <div className="search-container">
            <input type="text" id="search"  className="search-box" placeholder="Search the movie" />
            <button onClick={searchMovie} id="search-btn">Search</button>
        </div>
        <div className="movie-list">
        {
            movies && <>{movies.Search.map((movie) => (
                <div className="movies" key={movie.imdbID}>
                    <Link className="movie-container" to={`/about/${movie.imdbID}`}>
                    <div className="movie">
                        <img src={movie.Poster} /><p className="movie-title">{movie.Title}</p>
                    </div></Link>
                    {/* <div>
                        Add to Favourites
                    </div> */}
                </div>
              ))}</>
            }
     
        </div>
        </>
      );
    }

export default Home;