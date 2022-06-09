import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail({movies}) {
    let { movieName } = useParams();
    let movie = movies.find((mov) => mov.title === movieName);
    return (
        <div className="MovieDetail">
            <h1>{movie.title}</h1>
            <p>Debut: {movie.release_date}.toLocalDateString()</p>
            <img src={movie.poster_path} alt={movie.title} />
            <ul>Cast: 
                {movie.cast.map((actor) => {
                    return <li key={actor}>{actor}</li>;
                })}
            </ul>
        </div>
    );
}