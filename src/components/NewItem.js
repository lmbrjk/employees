import React, { useState } from "react"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import { Field, Form } from "react-final-form"
import Button from '@material-ui/core/Button';

const validate = values => {
    const errors = {};
    if (!values.surname) {
      errors.surname = 'Поле должно быть заполнено';
    }
    return errors;
};

function NewItem(props) {

    const dispatch = useDispatch();

    const allInputs = useSelector(state => state.fields.inputs);

    const [inputs] = useState(allInputs.filter(input => input.hidden === false));

    return (
        <div>
            <h1>Добавить сотрудника</h1> 
            <Form 
                validate={validate}
                onSubmit={(formData) => {

                    const payload = {
                        id: Date.now().toString(),
                        ...formData
                    }; 
                    
                    dispatch({type: "CREATE_ITEM", payload});

                }}
                render = {({ handleSubmit, form }) => (
                    <form onSubmit={ 
                        //необходимо для очистки полей после записи в redux
                        async (event) => {
                            await handleSubmit(event);
                            
                            event.nativeEvent.submitter.name == "back"
                                // при нажатии на кнопку "Сохранить и вернуться в список "                
                                ? props.history.push('/')
                                // при нажатии на кнопку "Сохранить и добавить еще"
                                : form.reset() ;                        
                        }
                    }>
                        { 
                            inputs.map(input => (

                                <div style={{margin:"10px"}}>
                                    <label>{input.labelField}                                        
                                            
                                            {input.typeField === "select" 
                                                ? <Field
                                                    type={input.typeField}
                                                    name={input.nameField}
                                                    component="select"                                    
                                                  >
                                                      {input.labels.map(option => <option value={option}>{option}</option>)}
                                                  </Field>
                                                : <Field
                                                    type={input.typeField}
                                                    name={input.nameField}
                                                    component="input"
                                                  />
                                            }
                                        
                                    </label>
                                </div>
                                    
                            ))             
                        }
                        <Button name="back" type="submit" variant="contained" color="primary">
                            Сохранить и вернуться в список
                        </Button>
                        <Button name="more" type="submit" variant="contained" color="primary">
                            Сохранить и добавить еще
                        </Button>
                    </form>
                )}
            />
        </div>        
    )
}

export default connect()(NewItem)