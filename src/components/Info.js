import React from "react"
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import { changeItem } from "../redux/actions"

function Info({ match, items }){ 

    let userID = match.params.id;
    
    let user = items.find( item => item.id === +userID);

    const changeInput = (event) => {
        let value = {
            id: user.id,
            value: event.target.value
        }
        
        changeUser(value);
    }
        
    return (
        <div>
            <span style={{margin:"10px"}}>{user.name}</span>
            <input onChange={changeInput} type="text" style={{margin:"10px"}} />
            <span style={{margin:"10px"}}>{user.surname}</span>
            <span style={{margin:"10px"}}>{user.number}</span>
            <Link to="/">Закрыть</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // присваиваем items значение из стейта state.items.items
        items: state.items.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeUser: (changes) => {
            dispatch(changeItem(changes));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);