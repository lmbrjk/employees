import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

//init
function ChangeItem({ match }){ 
    
    const dispatch = useDispatch();

    const users = useSelector(state => state.items)

    let user = users.items.find( item => item.id === match.params.id);

    const [item, changeLocalState] = useState(user);

    const changeInput = (event) => { 
        changeLocalState( );        
    }

    const changeInputHandler = (event) => {
        const payload = {
            id: match.params.id,
            inputName: event.target.name,
            changes: event.target.value
        };        

        dispatch({type: "CHANGE_ITEM", payload});
    }    
        
    return (
        <div>
            <h1>Изменить информацию о сотруднике</h1>
            <span></span>
            <input 
                onChange={changeInput} 
                value={item.name} type="text" 
                style={{margin:"10px"}}

                name="name"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.middlename} type="text" 
                style={{margin:"10px"}}

                name="middlename"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.surname} type="text" 
                style={{margin:"10px"}}

                name="surname"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.birthday} type="date" 
                style={{margin:"10px"}}

                name="birthday"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.number} type="number" 
                style={{margin:"10px"}}

                name="number"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.post} type="text" 
                style={{margin:"10px"}}

                name="post"
            />
            <input 
                onChange={changeInputHandler} 
                value={user.division} type="text" 
                style={{margin:"10px"}}

                name="division"
            />
            <button>Сохранить и выйти</button>
            <Link to="/">Выйти без изенений</Link>
        </div>
    )
}

export default connect()(ChangeItem);