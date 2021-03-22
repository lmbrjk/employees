import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

function ChangeItem({ match }){ 
    
    const dispatch = useDispatch();

    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const inputs = useSelector(state => state.fields.inputs);

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

    return (
        <div>
            <h1>Изменить информацию о сотруднике</h1>
            <form onSubmit={pushChanges}>
                {
                    inputs.map(input => (
                        input.hidden === false ?
                            <label>
                                {input.labelField}
                                <input
                                    onChange={changeInput}  
                                    type={input.typeField}
                                    name={input.nameField}
                                    value={item[input.nameField]}

                                    style={{margin:"10px"}}                                
                                />
                            </label>
                            : false
                    ))
                }
                <button type="submit">Сохранить и выйти</button>
            </form>
            <Link to="/">Выйти без изенений</Link>
        </div>
    )
}

export default connect()(ChangeItem);