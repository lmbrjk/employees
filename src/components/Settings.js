import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

//init
function Settings(){ 
    
    const dispatch = useDispatch();

    const allFields = useSelector(state => state.fields.allFields);
    const hiddenFields = useSelector(state => state.fields.hiddenFields);


    /*
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
    */


    return (
        <div>            
            {console.log()}
            <h1>Настройки</h1>
            {
                
            }
            
            <Link to="/">Выйти</Link>
        </div>
    )
}

export default connect()(Settings);