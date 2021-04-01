import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

import { Field, Form } from "react-final-form";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
    borderLeft: { 
        borderLeft: "1px solid black"
    }
});

const validate = values => {
    const errors = {};
    if (!values.surname) {
      errors.surname = 'Поле должно быть заполнено';
    }
    return errors;
};

function ChangeItem({ match, sidebarSwitch }){ 
    // sidebarSwitch - функция изменяющая sidebarShow в компоненте List

    // для добавления стилей компонентам material ui
    const classes = useStyles();
    
    const dispatch = useDispatch();

    const user = useSelector(state => state.items.items.find(item => item.id === match.params.id));
    const inputs = useSelector(state => state.fields.inputs);

    // это будет передано в initialValues формы чтобы 
    // поля были заполнены текущими значениями (до изменения)
    const [item] = useState(user);
    
    if(user === undefined){
        return <Redirect to="/" />
    }

    return (
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"

            spacing={3}
            className={classes.borderLeft}
        >
            <Grid item>
                <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    gutterBottom

                >
                    Изменить информацию о сотруднике
                </Typography>
            </Grid>
            <Grid item>
                <Form
                    validate={validate}
                    // чтобы поля были заполнены текущими значениями (до изменения)
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
                        <form onSubmit={ handleSubmit }>

                            <Grid container
                                direction="column"
                                justify="flex-start"
                                alignItems="stretch"
                    
                                spacing={3}
                            >
                                { 
                                    inputs.map(input => (
                                        
                                        <Grid item
                                            key={input.nameField}
                                        >
                                            <InputLabel htmlFor={input.nameField} >
                                                {input.labelField}
                                            </InputLabel>
                                            {
                                                input.typeField === "select"                                            
                                                ? 
                                                    <Field
                                                        type={input.typeField}
                                                        name={input.nameField}
                                                        component="select"
                                                        id={input.nameField}                                                                                    
                                                    >
                                                        {
                                                            input.labels.map(option => 
                                                                <option key={option} value={option}>{option}</option>)
                                                        }
                                                    </Field>
                                                : 
                                                    <Field
                                                        type={input.typeField}
                                                        name={input.nameField}
                                                        component="input"
                                                        id={input.nameField}  
                                                    />
                                            } 
                                            
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
                                        <Button type="submit" variant="contained" color="primary">
                                            Сохранить
                                        </Button>
                                    </Grid> 
                                    <Grid item>
                                        <Button  component={ Link } to="/list"
                                            onClick={ () => sidebarSwitch(false)}
                                            variant="contained" color="primary"
                                        >
                                            Выйти
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                />
            </Grid>
        </Grid>
    )
}

export default connect()(ChangeItem);