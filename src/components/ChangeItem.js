import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

//init
function ChangeItem({ match }){ 
    
    const dispatch = useDispatch();

    const users = useSelector(state => state.items)

    let user = users.items.find( item => item.id === match.params.id);

    const logging = (event) => {
        const payload = {
            id: match.params.id,
            changes: event.target.value
        };        

        dispatch({type: "CHANGE_ITEM", payload});
    }
        
    return (
        <div>
            <h1>Изменить информацию о сотруднике</h1>
            <span style={{margin:"10px"}}>{user.name}</span>
            <input onChange={logging} type="text" style={{margin:"10px"}} />
            <button>изменить имя</button>
            <span style={{margin:"10px"}}>{user.middlename}</span>
            <span style={{margin:"10px"}}>{user.surname}</span>
            <span style={{margin:"10px"}}>{user.birthday}</span>
            <span style={{margin:"10px"}}>{user.number}</span>
            <span style={{margin:"10px"}}>{user.post}</span>
            <span style={{margin:"10px"}}>{user.division}</span>
            <Link to="/">Закрыть</Link>
        </div>
    )
}

export default connect()(ChangeItem);