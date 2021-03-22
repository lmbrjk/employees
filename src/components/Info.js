import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

function Info({ match }){ 
    const id = match.params.id;
    const user = useSelector(state => state.items[items.id]);
    const fields = useSelector(state => state.fields);

    //const user = users.items.find( item => item.id === match.params.id);
    
    // let userS = Object.entries(user).filter( item => Object.keys(item).)
    // console.log(userS);

    //.filter( field => fields.includs(field));
        
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            { 
                console.log(user)
                // Object.values(user).map( field => 
                //     <span style={{margin:"10px"}}>{field}</span>
                // )
            }
            <Link to="/">Закрыть</Link>
            <Link to={"/edit/" + match.params.id}>Изменить</Link>
        </div>
    )
}

export default connect()(Info);