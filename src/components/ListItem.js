import React from "react"
import { Link } from "react-router-dom"

function ListItem({ activeFields, item, index }){    

    return (       
        <li>
            {index + 1}
            <Link to={`/list/info/${item.id}`}>
                {
                    activeFields.map(field => ( 
                        <span key={item[field.nameField]}>{item[field.nameField]}</span>
                    ))
                }
            </Link>
        </li>
    )
}

export default ListItem;