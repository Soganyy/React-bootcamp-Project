import React, { Component } from 'react';
import './MovieItem.css';
import { useDispatch, useSelector } from 'react-redux';

function  MovieItem ({Title, Year, Poster, imdbID}){

    const dataFromStore = useSelector(
        function(state) {
            return state;
        }
    )

    const dis = useDispatch();
    
    function addFavoriteListAddHanlder(e) {
        e.preventDefault();

        let sameFilm = true;

        if(dataFromStore.favoriteList.length === 0) {
            dis({
                type: "favoriteListChange",
                data: {Title, Year, Poster, imdbID}
            })
        } else {

            let loopStop = false;

            dataFromStore.favoriteList.forEach((currentElement) => {

                if(loopStop === false) {
                    if(currentElement.Title === Title) {
                        loopStop = true;
                        return sameFilm = true;
                    } else {
                        return sameFilm = false;
                    }
                }
            })
        }

        if(sameFilm === false) {
            dis({
                type: "favoriteListChange",
                data: {Title, Year, Poster, imdbID}
            })
        }
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