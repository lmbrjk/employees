import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import { Field, Form } from "react-final-form"
import Button from '@material-ui/core/Button';





function Settings(){ 
    
    const dispatch = useDispatch();
    
    const allFields = useSelector(state => state.fields.allFields);

    /* чтобы при загрузке страницы напротив скрытых полей стояла галка */
    // находим все поля со свойством hidden = true
    const fields = allFields.filter(field => field.hidden === true);
    // initialValues будут передаваться в Форму как изначальные значения
    const initialValues = [...fields.map(field => field.name)];
    /* !/ чтобы при загрузке страницы напротив скрытых полей стояла галка */

    /*
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
    */


    return (
        <div>
            <h1>Настройки</h1>
            <Form
                // определяем напротив каких свойств будет стоять галка при загрузке
                // свойство fields указано во всех чекбоксах name="fields"
                initialValues={{ fields: initialValues }}

                onSubmit={(formData) => {
                    
                    const payload = {
                        hiddenFields: Object.values(formData)
                    };
                    
                    dispatch({type: "CHANGE_FIELDS_LIST", payload});
                }}
                render = {({ handleSubmit }) => (
                    <form onSubmit={ handleSubmit }>
                        { 
                            allFields.map((field, index) => (

                                <div key={index} style={{margin:"10px"}}>
                                    <label>{field.label}                                            
                                        <Field
                                            type="checkbox"
                                            name="fields"
                                            component="input"
                                            value={field.name}
                                        />
                                    </label>
                                </div>                                    
                            ))             
                        }
                        <Button name="back" type="submit" variant="contained" color="primary">
                            Сохранить
                        </Button>
                        <Button component={ Link } to="/" variant="contained" color="primary">
                            Закрыть
                        </Button>
                    </form>
                )}
            />
        </div>
    )
}

export default connect()(Settings);