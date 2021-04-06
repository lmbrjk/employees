import React from "react";

import { Field } from "react-final-form";
import { TextField } from '@material-ui/core';

const DateInput = ({ nameField, labelField, typeField }) => (
    <Field
        id={nameField}
        name={nameField}
    >
        {({ input }) => (
            <TextField
                label={labelField}
                type={typeField}
                //value={input.value}
            />
        )}
    </Field>
);

export default DateInput;
