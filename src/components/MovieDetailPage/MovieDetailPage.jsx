import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

export default function MovieDetail({movies}) {
    // let { movieName } = useParams();
    // let movie = movies.find((mov) => mov.title === movieName);
    return (
        <div className="MovieDetail">
            <h1>{movies.title}</h1>
            <p>Debut: {movies.release_date}.toLocalDateString()</p>
            <img src={movies.poster_path} alt={movies.title} />
            <ul>Cast: 
                {movies.cast.map((actor) => {
                    return <li key={actor}>{actor}</li>;
                })}
            </ul>
        </div>
    );
}