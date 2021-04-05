import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import InputMain from "./inputs/InputMain";
import InputSelect from "./inputs/InputSelect";

import { Form } from "react-final-form";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";


const validate = values => {
    const errors = {};
    if (!values.surname) {
      errors.surname = 'Поле должно быть заполнено';
    }
    return errors;
};

export default function NewItem(props) {

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
                render = {({ handleSubmit, form, values }) => (
                    <form onSubmit={ 
                        //необходимо для очистки полей после записи в redux
                        async (event) => {
                            if(values.button === "back"){
                                // удаляем из values ключ button чтобы он не был записан в item
                                delete values.button;
                                await handleSubmit(event);

                                // при нажатии на кнопку "Сохранить и вернуться в список "                
                                props.history.push('/list/')
                            }
                            else {
                                // удаляем из values ключ button чтобы он не был записан в item
                                delete values.button;
                                await handleSubmit(event);

                                // при нажатии на кнопку "Сохранить и добавить еще"
                                form.reset() ;       
                            }
                        }
                    }>
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"                            
                            spacing={3}
                        >
                            { 
                                inputs.map(input => 
                                    input.typeField === "select" 
                                        ? <InputSelect input={input} key={input.nameField} />
                                        : <InputMain input={input} key={input.nameField} />             
                                )            
                            }
                        
                            <Grid container
                                item
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                spacing={1}
                            > 
                                <Grid item>
                                    <Button onClick={ () => form.change("button", "back")} name="back" type="submit" variant="contained" color="primary">
                                        Сохранить и вернуться в список
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={ () => form.change("button", "more")} name="more" type="submit" variant="contained" color="primary">
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