import React from "react"
import { Link } from "react-router-dom"

function ListItem({ activeFields, item }){    

    return (       
        <li>
            <Link to={`/list/info/${item.id}`}>
                {
                    activeFields.map(field => ( 
                        <span>{item[field.nameField]}</span>
                    ))
                }
            </Link>
        </li>
    )
}

export default ListItem;