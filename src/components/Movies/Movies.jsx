import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useSelector } from 'react-redux'

function Movies() {

    const movie = useSelector(
        function(state) {
            return state;
        }
    )

    return (
        <ul className="movies">
            {movie.data.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );

}

export default Movies;