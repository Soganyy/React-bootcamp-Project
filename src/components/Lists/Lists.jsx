import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Lists() {

    const {lists} = useSelector(
        function(state) {
            return state;
        }
    )

    return (
        <>
            <ul>
                {lists.map((item, index) => {
                    return <li key={index}><Link to={`ListItem${item.id}`}>{item.title}</Link></li>
                })}
            </ul>
        </>
    )
}