import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Info({ match }){    

    const users = useSelector(state =>
        state.items
    )

    const user = users.items.find( item => item.number == match.params.id)
    
    return (
        <div>
            <span>{user.name}</span>
            <span>{user.surname}</span>
            <span>{user.number}</span>
            <Link to="/">Закрыть</Link>
        </div>
    )
}
export default Info;