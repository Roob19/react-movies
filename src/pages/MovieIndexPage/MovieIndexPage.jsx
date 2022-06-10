import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";
import './MovieIndex,css'

export default function MovieIndex({movies}) {
    return (
        <div>
            <h1>MovieIndexPage</h1>
            <div className="MovieIndex">
                {movies.map((movie, idx) => (
                    <MovieCard movie={movie} index={idx} />
                ))}
            </div>
        </div>
    )
}