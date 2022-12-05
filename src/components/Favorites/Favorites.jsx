import React from 'react';
import './Favorites.css';


function Favorites() {
    function ItemDeleteHandler(imdbID){
    }
    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : 
             <ul className="favorites__list">
                {[].map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() =>ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>

        </div>
    );
}


export default Favorites;