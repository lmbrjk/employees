import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

//init
function Settings(){ 
    
    const dispatch = useDispatch();

    const fields = useSelector(state => state.fields.hidden);



    // const changeInput = (event) => { 
    //     setLocalState(
    //         item => (
    //             {...item, 
    //             ...{[event.target.name]: event.target.value}
    //             }
    //         )
    //     );        
    // }

    // const pushChanges = (event) => {
    //     event.preventDefault();

    //     const payload = {
    //         id: match.params.id,
    //         item
    //     };  

    //     dispatch({type: "CHANGE_ITEM", payload});
    // }

    return (
        <div>
            <h1>Настройки</h1>
            <form>
                <label></label>
            </form>
            <Link to="/">Выйти</Link>
        </div>
    )
}

export default connect()(Settings);