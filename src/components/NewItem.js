import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import { useFormik, Formik, Field, Form } from 'formik';


import Button from '@material-ui/core/Button';


function NewItem() {

    const dispatch = useDispatch();

    const allInputs = useSelector(state => state.fields.inputs);

    const [inputs] = useState(allInputs.filter(input => input.hidden === false));

    const [item, setLocalState] = useState({});
    
        
    const inputsNames = inputs.map(item => item.nameField);
    
    const formik = useFormik({
        initialValues: {},
        onSubmit: values => {
            console.log(values)
        },
    });
    
    
    const changeInput = (event) => { 
        setLocalState(
            item => (
                {...item, 
                ...{[event.target.name]: event.target.value}
                }
            )
        );        
    }

    const payload = {
        id: Date.now().toString(),
        ...item
    };  

    const pushItem = (event) => {
        event.preventDefault();        

        dispatch({type: "CREATE_ITEM", payload});
    }

    
    return (
        
            
                
                <form onSubmit={formik.handleSubmit}>
                    {
                        inputs.map(input => (
                            
                            <label>
                                {input.labelField}
                                <input
                                    onChange={formik.handleSubmit} 
                                    type={input.typeField}
                                    name={input.nameField}
                                   

                                    id={input.nameField}
                                    style={{margin:"10px"}}                                
                                />
                            </label>
                                
                        )) 
                    }
                    <Button type="submit" component={ Link } to="/" variant="contained" color="primary">
                        Сохранить и вернуться в список
                    </Button>
                    <Button type="submit" component={ Link } to="/new" variant="contained" color="primary">
                        Сохранить и добавить еще
                    </Button>
                </form>
            
            
            
        
    )
}

export default connect()(NewItem)