import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

function Info({ match }){     
    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const fields = useSelector(state => state.fields.hidden);
 
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            {
                Object.keys(user).map(key => (
                    !fields.includes(key) ? <span style={{margin:"10px"}}>{user[key]}</span>
                    : false
                ))
            }
            <Link to="/">Закрыть</Link>
            <Link to={"/edit/" + match.params.id}>Изменить</Link>
        </div>
    )
}

export default connect()(Info);