import React from "react";

import { Field } from "react-final-form";

import Grid from '@material-ui/core/Grid';
import InputLabel from "@material-ui/core/InputLabel";

export default function InputSelect({input}) {
    return (
        <Grid item>
            <InputLabel htmlFor={input.nameField}>
                {input.labelField}
            </InputLabel>        
            <Field
                type={input.typeField}
                name={input.nameField}
                component="select"
                id={input.nameField}                                                                                        
            >
                {input.labels.map(option => <option key={option} value={option}>{option}</option>)}
            </Field>
        </Grid> 
    )
}