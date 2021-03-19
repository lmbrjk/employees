import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

//init
function ChangeItem({ match }){ 
    
    const dispatch = useDispatch();

    const users = useSelector(state => state.items)

    let user = users.items.find( item => item.id === match.params.id);

    const [item, setLocalState] = useState(user);

    const changeInput = (event) => { 
        setLocalState(
            item => (
                {...item, 
                ...{[event.target.name]: event.target.value}
                }
            )
        );        
    }

    const pushChanges = (event) => {
        event.preventDefault();

        const payload = {
            id: match.params.id,
            item
        };  

        dispatch({type: "CHANGE_ITEM", payload});
    }

    //  STATE изменяется непосредственно при изменениях в инпуте
    // const changeInputHandler = (event) => {
    //     const payload = {
    //         id: match.params.id,
    //         inputName: event.target.name,
    //         changes: event.target.value
    //     };        

    //     dispatch({type: "CHANGE_ITEM", payload});
    // }    
        
    return (
        <div>
            <h1>Изменить информацию о сотруднике</h1>
            <form onSubmit={pushChanges}>
                <input 
                    onChange={changeInput} 
                    value={item.name} type="text" 
                    style={{margin:"10px"}}

                    name="name"
                />
                <input 
                    onChange={changeInput} 
                    value={item.middlename} type="text" 
                    style={{margin:"10px"}}

                    name="middlename"
                />
                <input 
                    onChange={changeInput} 
                    value={item.surname} type="text" 
                    style={{margin:"10px"}}

                    name="surname"
                />
                <input 
                    onChange={changeInput} 
                    value={item.birthday} type="date" 
                    style={{margin:"10px"}}

                    name="birthday"
                />
                <input 
                    onChange={changeInput} 
                    value={item.number} type="number" 
                    style={{margin:"10px"}}

                    name="number"
                />
                <input 
                    onChange={changeInput} 
                    value={item.post} type="text" 
                    style={{margin:"10px"}}

                    name="post"
                />
                <input 
                    onChange={changeInput} 
                    value={item.division} type="text" 
                    style={{margin:"10px"}}

                    name="division"
                />
                <button type="submit">Сохранить и выйти</button>
            </form>
            <Link to="/">Выйти без изенений</Link>
        </div>
    )
}

export default connect()(ChangeItem);