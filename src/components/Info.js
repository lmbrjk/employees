import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector } from 'react-redux'

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
            <Link to="/">Закрыть</Link>
            <Link to={"/edit/" + match.params.id}>Изменить</Link>
        </div>
    )
}

export default connect()(Info);