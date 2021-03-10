import React from "react"
import { Link } from "react-router-dom"

export default ({ item }) => {
    return (       
        <li>    
            <Link to={`/info/${item.id}`}>
                {item.name} {item.surname} {item.number}
            </Link>
        </li>        
    )
}