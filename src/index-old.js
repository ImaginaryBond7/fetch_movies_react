const { default: axios } = require("axios");
const { useEffect, useState } = require("react")
const { render } = require("react-dom")

function App() {

    const [movies, setMovies] = useState([{
        Title: 'Star Wars: Episode IV - A New Hope',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
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
    },]);

//     const getMovies = async () => {
//         const resp = await axios.get('https://omdbapi.com/?apikey=1f89eecb&s=har')
//         console.log(resp)
//         setMovies(resp.data.Search)
//     }

// useEffect(function() {
//     getMovies();
// }, [])

return(
    <>
    <h1>Movies List</h1>
    {
    movies.map((movie) => {
        return <p>{movie.Title}</p>
    })
    }
    </>
)
}
// )list all the movies click and show it's detail // can add favourite button

render(<App />, document.getElementById("root"))