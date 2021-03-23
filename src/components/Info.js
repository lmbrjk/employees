import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';

function Info({ match }){     
    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const fields = useSelector(state => state.fields.inputs);
 
    return (
        <div>
            <h1>Информация о сотруднике</h1>
            {
                fields.map(field => (
                    field.hidden === false ?
                        <label>
                            {field.labelField}
                            <span>{user[field.nameField]}</span>
                        </label>
                        : false
                ))
            }
            
            <Button component={ Link } to="/" variant="contained" color="primary">
                Закрыть
            </Button>
            <Button component={ Link } to={"/edit/" + match.params.id} variant="contained" color="primary">
                Изменить
            </Button>
        </div>
    )
}

export default connect()(Info);