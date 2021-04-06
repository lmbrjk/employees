import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { Form } from "react-final-form";
import { TextInput, SelectInput } from "./inputs";
import DateInput from "./inputs/DateInput";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";


// нажатие на кнопку "Сохранить и вернуться в список"
const buttonBack = async (handleSubmit, props, event) => {
    await handleSubmit(event);

    // при нажатии на кнопку "Сохранить и вернуться в список "                
    props.history.push('/list/')
};

// нажатие на кнопку "Сохранить и добавить ещё"
const buttonMore = async (handleSubmit, form, event) => {
    await handleSubmit(event);

    // при нажатии на кнопку "Сохранить и добавить еще"
    form.reset() ;   
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
                onSubmit={(formData) => {

                    const payload = {
                        id: Date.now().toString(),
                        ...formData
                    }; 
                    
                    dispatch({type: "CREATE_ITEM", payload});

                }}
                render = {({ handleSubmit, form }) => (
                    <form>
                        <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"                            
                            spacing={3}
                        >
                            { inputs.map(input => (
                                <Grid key={input.nameField} item>
                                    {
                                        input.typeField === "select" 
                                        ? <SelectInput 
                                            nameField={input.nameField} 
                                            labelField={input.labelField} 
                                            labels={input.labels} 
                                            typeField={input.typeField} 
                                          />
                                        : input.typeField === "date"
                                            ? <DateInput 
                                                nameField={input.nameField} 
                                                labelField={input.labelField} 
                                                typeField={input.typeField}
                                              />
                                            : <TextInput 
                                                nameField={input.nameField} 
                                                labelField={input.labelField} 
                                                typeField={input.typeField}
                                              />  
                                    }
                                </Grid>
                            ))}                        
                            <Grid container
                                item
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                spacing={1}
                            > 
                                <Grid item>
                                    <Button onClick={ () => buttonBack(handleSubmit, props) } name="back" type="button" variant="contained" color="primary">
                                        Сохранить и вернуться в список
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={ () => buttonMore(handleSubmit, form) } name="more" type="button" variant="contained" color="primary">
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