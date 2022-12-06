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

    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : 
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