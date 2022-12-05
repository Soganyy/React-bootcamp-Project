import React, { Component, useEffect } from 'react';
import './SearchBox.css';

function SearchBox() {


    useEffect(
        function(){
 
        },[]
    )
    
    let searchLineChangeHandler = (e) => {
        
    }
    let searchBoxSubmitHandler = (e) => {
            }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        // value={inputValue}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    // disabled={!inputValue}
                >
                    Искать
                </button>
            </form>
        </div>
    );

}

export default SearchBox;


