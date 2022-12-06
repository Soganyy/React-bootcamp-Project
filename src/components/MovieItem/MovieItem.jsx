import React, { Component } from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';

function  MovieItem ({Title, Year, Poster, imdbID}){

    const dis = useDispatch();
    
    function addFavoriteListAddHanlder(e) {
        e.preventDefault();
            
        dis({
            type: "favoriteListChange",
            data: {Title, Year, Poster, imdbID}
        })
    }
        
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={addFavoriteListAddHanlder}>Добавить в список</button>
            </div>
        </article>
    );
        
}
 
export default MovieItem;