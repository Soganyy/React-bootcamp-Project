import React from 'react';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ListItem() {

    const [state, changeState] = useState([]);

    let params = useParams();
    
    useEffect(function() {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${params.id}`)
        .then((response) => {return response.json()})
        .then((data) => {changeState(data.movies)
        // console.log(data)
        })
    }, [])

    return(
        <div>{state.map((item, index) => {
            return <div key={index}><a href={`https://www.imdb.com/title/${item.imdbID}`}>{item.Title}</a></div>;
        })}</div>
    )
}