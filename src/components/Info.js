import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function Info({ match }){ 
    
    const dispatch = useDispatch();

    const users = useSelector(state =>
        state.items
    );
    const user = users.items.find( item => item.id == match.params.id);

    const changeData = (data) => {
        dispatch({type:"CHANGE_ITEM", payload: data});
    }
    
    return (
        <div>
            <span onClick={()=> changeData(prompt())}style={{margin:"10px"}}>{user.name}</span>
            <span style={{margin:"10px"}}>{user.surname}</span>
            <span style={{margin:"10px"}}>{user.number}</span>
            <Link to="/">Закрыть</Link>
        </div>
    )
}
export default Info;