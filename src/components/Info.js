import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

function Info({ match }){ 

    const users = useSelector(state => state.items)

    let user = users.items.find( item => item.id === match.params.id);
        
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            <span style={{margin:"10px"}}>{user.name}</span>
            <span style={{margin:"10px"}}>{user.middlename}</span>
            <span style={{margin:"10px"}}>{user.surname}</span>
            <span style={{margin:"10px"}}>{user.birthday}</span>
            <span style={{margin:"10px"}}>{user.number}</span>
            <span style={{margin:"10px"}}>{user.post}</span>
            <span style={{margin:"10px"}}>{user.division}</span>
            <Link to="/">Закрыть</Link>
            <Link to={"/edit/" + match.params.id}>Изменить</Link>
        </div>
    )
}

export default connect()(Info);