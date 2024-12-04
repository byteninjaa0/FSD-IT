import './MovieList.css';
import movies from './movies';

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie)=>(
        <div key={movie.id} className="movie-card">
          <div className="image"><img src={movie.image} alt={movie.title} /></div>
          <div className="movie-info">
            <h4><span>Title :</span> {movie.title}</h4>
            <p><span>Language :</span> {movie.language}</p>
            <p><span>Cost :</span> Rs.{movie.cost}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default MovieList;
