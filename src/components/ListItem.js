import React from "react"
import { Link } from "react-router-dom"

function ListItem({ activeFields, item, index }){    
    // activeFields - активные поля
    // item - данные о выбранном сотруднике
    // index - порядковый номер под которым будет отображаться сотрудник
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