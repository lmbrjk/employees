import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import { reduxForm, Field } from "redux-form";
import Button from '@material-ui/core/Button';


const NewItemReduxForm = ({inputs}, props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            { 
                inputs.map(input => (
                    
                    <label>
                        {input.labelField}
                        <Field
                            component={"input"}
                            //onChange={changeInput} 
                            type={input.typeField}
                            name={input.nameField}

                            style={{margin:"10px"}}                                
                        />
                    </label>
                        
                ))             
            }
            <button>
                Сохранить и вернуться в список
            </button>
            {/* <Button type="submit" component={ Link } to="/new" variant="contained" color="primary">
                Сохранить и добавить еще
            </Button> */}
        </form>
    )
}

const NewItemForm = reduxForm({form: "newItem"})(NewItemReduxForm);

function NewItem() {

    const dispatch = useDispatch();

    const allInputs = useSelector(state => state.fields.inputs);

    const [inputs] = useState(allInputs.filter(input => input.hidden === false));

    const onSubmit = (formData) => {
        const payload = {
            id: Date.now().toString(),
            ...formData
        };

        console.log(formData)
        console.log(payload)

        dispatch({type: "CREATE_ITEM", payload});
    }

    
    return (
        <NewItemForm onSubmit={onSubmit} inputs={inputs} />
    )
}

export default connect()(NewItem)