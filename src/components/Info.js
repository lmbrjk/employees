import React from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';

function Info({ match }){     
    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const fields = useSelector(state => state.fields.inputs);
    
    if(user === undefined){
        return <Redirect to="/" />
    }    
 
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            {
                fields.map(field =>
                    <div key={user[field.nameField]} style={{margin:"10px"}}>               
                        <label>
                            {field.labelField}
                            <span>{user[field.nameField]}</span>
                        </label>
                    </div>                        
                )
            }
            
            <Button component={ Link } to="/list/" variant="contained" color="primary">
                Закрыть
            </Button>
            <Button component={ Link } to={"/list/edit/" + match.params.id} variant="contained" color="primary">
                Изменить
            </Button>
        </div>
    )
}

export default connect()(Info);