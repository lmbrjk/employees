import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

function Info({ match }){ 

    const users = useSelector(state => state.items)

    const user = users.items.find( item => item.id === match.params.id);
        
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            { 
                Object.values(user).map( field => 
                    <span style={{margin:"10px"}}>{field}</span>
                )
            }
            <Link to="/">Закрыть</Link>
            <Link to={"/edit/" + match.params.id}>Изменить</Link>
        </div>
    )
}

export default connect()(Info);