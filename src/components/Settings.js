import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { Field, Form } from "react-final-form";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";


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
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <Typography
                component="h1"
                variant="h5"
                color="inherit"
                gutterBottom
            >
                Настройки
            </Typography>
            <Typography
                variant="subtitle2"
                color="inherit"
                gutterBottom
            >
                Выбранные поля не будут отображаться в списке сотрудников
            </Typography>
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
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                
                            spacing={3}
                        >
                            { 
                                allFields.map((field, index) => (

                                    <Grid item
                                        key={index}
                                    >
                                        <InputLabel>
                                            {field.labelField}                                            
                                            <Field
                                                type="checkbox"
                                                name="fields"
                                                component="input"
                                                value={field.nameField}
                                            />
                                        </InputLabel>
                                    </Grid>                                    
                                ))             
                            }
                            <Grid container
                                item
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <Grid item>
                                    <Button name="back" type="submit" variant="contained" color="primary">
                                        Сохранить
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button component={ Link } to="/" variant="contained" color="primary">
                                        Закрыть
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </Grid>
    )
}

export default Settings;