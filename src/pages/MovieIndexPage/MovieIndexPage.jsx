import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";

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