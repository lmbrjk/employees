import React from "react"
import ListItem from "./ListItem"


export default ({ list }) => {
    if(!list.length){
        return <p>Сотрудников нет</p>
    }
    
    return list.map( (item, index) => <ListItem item={item} key={index}/>)
}