import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

 
function ListItem({ item }) {
    const hiddenFields = useSelector(state => state.fields.hiddenFields);

     
    const filteredItem = Object.keys(item)
            .filter(key => !hiddenFields.includes(key))
            .reduce( (obj, key) => {
                return {
                    ...obj,
                    [key]: item[key]
                };
            }, {});
    
    return (      
        <li>
            <Link to={`/list/info/${item.id}`}>
                {
                    Object.values(filteredItem).map( value => <span>{value}</span>)
                }
            </Link>
        </li>        
    )
}

export default connect()(ListItem)