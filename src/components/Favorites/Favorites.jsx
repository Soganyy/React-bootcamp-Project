import React from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux';

function Favorites() {

    const favoriteMovies = useSelector(
        function(state) {
            return state;
        }
    )

    const dis = useDispatch();

    function ItemDeleteHandler(imdbID) {

        let indexOfElement;

        favoriteMovies.favoriteList.filter(function(currentValue, index){
            if(currentValue.imdbID === imdbID){
                indexOfElement = index;
            }
        })
        
        dis({
            type: "deleteElement",
            index: indexOfElement
        })
        
    }

    const listOfFavoritesName = (e) => {
        dis({
            type: "FavouritesListNameValue",
            value: e.target.value
        })
    }

    const createLinkOfFavorites = () => {

        if(favoriteMovies.favoritesListName !== ""){
            fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: favoriteMovies.favoritesListName,
                movies: favoriteMovies.favoriteList
            })
        })
        .then((response) => {return response.json()})
        .then((data => {
            // console.log(data)
            dis({
                type: "createList",
                payload: {
                    title: data.title,
                    id: data.id
                }
            })
        }))
        }
    }

    return (
        <div className="favorites">
            <input type="text" onChange={listOfFavoritesName} value={favoriteMovies.favoritesListName} />
            <button onClick={createLinkOfFavorites}>Get Links</button>

            <br/><br/>
            Əlavə edilmiş elementlərin sayı : {favoriteMovies.favoriteList.length} 
             <ul className="favorites__list">
                {favoriteMovies.favoriteList.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() =>ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>
        </div>
    );
}


export default Favorites;