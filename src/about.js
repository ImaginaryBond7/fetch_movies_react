import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const About = () => {
  let params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=bb4f0600&i=" + params.imdbID )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div>
      {movie ? (
        <>
        <div className='navbar'>
            <Link to={'/'}> <h1>Get movies</h1> </Link>
        </div>
          <div className="desc-container">
          
            <div className="desc-poster">
              <img src={movie.Poster} className="poster" />
            </div>
            <div className="desc-text">
              <h2>{movie.Title}</h2>
              <p className="plot">{movie.Plot}</p>
              <p>
                <a>Actors</a> : {movie.Actors}
              </p>
              <p>
                <a>Released</a> : {movie.Released}
              </p>
              <p>
                <a>IMDB Ratings</a> : {movie.imdbRating}
              </p>
              <p>
                <a>Runtime</a> : {movie.Runtime}
              </p>
            </div>
          </div>
          
        </>
      ) : (
        <h1>Please wait....</h1>
      )}
    </div>
  );
};
export default About;
