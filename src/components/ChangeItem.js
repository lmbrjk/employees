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

function ChangeItem({ match }){ 
    
    const dispatch = useDispatch();

    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const inputs = useSelector(state => state.fields.inputs);

    const [item, setLocalState] = useState(user);

    // const changeInput = (event) => { 
    //     setLocalState(
    //         item => (
    //             {...item, 
    //             ...{[event.target.name]: event.target.value}
    //             }
    //         )
    //     );        
    // }   
    
    const id = match.params.id;

    return (

        <div>
            <h1>Изменить информацию о сотруднике</h1>            
            <Form
                validate={validate}
                onSubmit={(formData) => {

                    const payload = {
                        id: item.id,
                        ...formData 
                    };  
                    
                    console.log(payload)
                    dispatch({type: "CHANGE_ITEM", payload});

                }}
                render = {({ handleSubmit }) => (
                    <form onSubmit={ async () => {
                        await handleSubmit;} 
                    }>
                        { 
                            inputs.map(input => (

                                <div style={{margin:"10px"}}>
                                    <label>{input.labelField}</label>
                                    <Field
                                        type={input.typeField}
                                        name={input.nameField}
                                        component="input" 
                                        
                                        initialValue={item[input.nameField]}
                                    />
                                </div>
                                    
                            ))             
                        }
                        <Button type="submit" variant="contained" color="primary">
                            Сохранить
                        </Button>
                        <Button  component={ Link } to="/" variant="contained" color="primary">
                            Выйти без изменений
                        </Button>
                    </form>
                )}
            />
                {/* <form onSubmit={pushChanges}>
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
                <Link to="/">Выйти без изменений</Link> */}
            
        </div>
    )
}

export default connect()(ChangeItem);