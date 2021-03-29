import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'

import { Field, Form } from "react-final-form"
import Button from '@material-ui/core/Button';





function Settings(){ 
    
    const dispatch = useDispatch();
    
    const allFields = useSelector(state => state.fields.inputs);

    /* чтобы при загрузке страницы напротив скрытых полей стояла галка */
    // находим все поля со свойством hidden = true
    const hiddenFields = allFields.filter(field => field.hidden === true);
    // initialValues будут передаваться в Форму как изначальные значения
    const initialValues = [...hiddenFields.map(field => field.nameField)];
    /* !/ чтобы при загрузке страницы напротив скрытых полей стояла галка */

    return (
        <div>
            <h1>Настройки</h1>
            <p>Выберите поля которые не будут отображаться в списке сотрудников</p>
            <Form
                // определяем напротив каких свойств будет стоять галка при загрузке
                // свойство fields указано во всех чекбоксах name="fields"
                initialValues={{ fields: initialValues }}

                onSubmit={(formData) => {
                    
                    const payload = {
                        ...formData
                    };
                    
                    dispatch({type: "CHANGE_FIELDS_LIST", payload});
                }}
                render = {({ handleSubmit }) => (
                    <form onSubmit={ handleSubmit }>
                        { 
                            allFields.map((field, index) => (

                                <div key={index} style={{margin:"10px"}}>
                                    <label>{field.labelField}                                            
                                        <Field
                                            type="checkbox"
                                            name="fields"
                                            component="input"
                                            value={field.nameField}
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