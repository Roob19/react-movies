import React from 'react';
import { movies } from '../../utilities/data';

export default function MovieDetail({movie}) {
    return (
        <div className="MovieDetail">
            <h1>{movie.title}</h1>
            <img src={movie.poster_path} alt={movie.title} />
            <p>Debut: {movie.release_date}</p>
            <ul>Cast: 
                <li>{movie.cast}</li>
            </ul>
        </div>
    );
}