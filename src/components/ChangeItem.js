import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'


import { Field, Form } from "react-final-form"
import Button from '@material-ui/core/Button';


const validate = values => {
    const errors = {};
    if (!values.surname) {
      errors.surname = 'Поле должно быть заполнено';
    }
    if (!values.post) {
      errors.post = 'Поле должно быть заполнено';
    }
    return errors;
};

function ChangeItem({ match }, props){ 
    
    const dispatch = useDispatch();

    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const inputs = useSelector(state => state.fields.inputs);

    const [item] = useState(user);    

    return (

        <div>
            <h1>Изменить информацию о сотруднике</h1>            
            <Form
                validate={validate}
                //чтобы поля были заполнены текущими значениями (до изменения)
                initialValues={item}

                onSubmit={(formData) => {

                    const payload = {
                        // взят из локального стейта
                        id: item.id,
                        // пришло из формы
                        ...formData 
                    }; 

                    dispatch({type: "CHANGE_ITEM", payload});

                }}
                render = {({ handleSubmit }) => (
                    <form onSubmit={ 
                        async (event) => {
                            await handleSubmit(event);
                            
                            event.nativeEvent.submitter.name == "saveAndBack"
                                // при нажатии на кнопку "Сохранить и вернуться в список "                
                                ? props.history.push('/')
                                : false ;
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
                        <Button type="submit" variant="contained" color="primary">
                            Сохранить
                        </Button>
                        <Button name="saveAndBack" type="submit" variant="contained" color="primary">
                            Сохранить и вернуться в список
                        </Button>
                        <Button  component={ Link } to="/" variant="contained" color="primary">
                            Выйти без изменений
                        </Button>
                    </form>
                )}
            /> 
        </div>
    )
}

export default connect()(ChangeItem);