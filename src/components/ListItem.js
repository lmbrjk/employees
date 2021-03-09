import React from "react"

export default ({ item }) => {
    return (
        <li>
            {item.index} 
            <a>{item.name} {item.surname} {item.number}</a>
        </li>
    )
}