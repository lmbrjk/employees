import React from "react"
import { Link } from "react-router-dom"

export default ({ item }) => {
    return (       
        <li>    
            <Link to={`/list/info/${item.id}`}>
                {item.surname} {item.post}
            </Link>
        </li>        
    )
}