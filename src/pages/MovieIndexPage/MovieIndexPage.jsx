import React from 'react';
import MovieDetail from "../../components/MovieDetailPage/MovieDetailPage";

export default function MovieIndex({movies}) {
    return (
        <div>
            <h1>MovieIndexPage</h1>
            <div className="MovieIndex">
                {movies.map((movie, idx) => (
                    <MovieDetail movie={movie} index={idx} />
                ))}
            </div>
        </div>
    )
}