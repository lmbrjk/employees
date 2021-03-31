import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

import { Field, Form } from "react-final-form";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography, InputLabel } from "@material-ui/core";


const validate = values => {
    const errors = {};
    if (!values.surname) {
      errors.surname = 'Поле должно быть заполнено';
    }
    return errors;
};

function NewItem(props) {

    const dispatch = useDispatch();

    const inputs = useSelector(state => state.fields.inputs);

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
                Добавить сотрудника
            </Typography>            
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
                            
                            event.nativeEvent.submitter.name === "back"
                                // при нажатии на кнопку "Сохранить и вернуться в список "                
                                ? props.history.push('/list/')
                                // при нажатии на кнопку "Сохранить и добавить еще"
                                : form.reset() ;                        
                        }
                    }>
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                            
                            spacing={3}
                        >
                            { 
                                inputs.map(input => (
                                    <Grid item
                                        key={input.nameField}
                                    >
                                        <InputLabel for={input.nameField} gutterBottom>
                                                {input.labelField}
                                        </InputLabel>        
                                        {
                                            input.typeField === "select" 
                                                ? <Field
                                                    type={input.typeField}
                                                    name={input.nameField}

                                                    id={input.nameField}
                                                    component="select"                                    
                                                >
                                                    {input.labels.map(option => <option key={option} value={option}>{option}</option>)}
                                                </Field>
                                                : <Field
                                                    type={input.typeField}
                                                    name={input.nameField}

                                                    id={input.nameField}
                                                    component="input"
                                                />
                                        }
                                    </Grid>                                    
                                ))             
                            }
                        
                            <Grid container
                                item 

                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                spacing={1}
                            > 
                                <Grid item>
                                    <Button name="back" type="submit" variant="contained" color="primary">
                                        Сохранить и вернуться в список
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button name="more" type="submit" variant="contained" color="primary">
                                        Сохранить и добавить еще
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

export default connect()(NewItem)