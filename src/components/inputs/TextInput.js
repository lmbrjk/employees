import React from "react";

import { Field } from "react-final-form";
import { TextField } from '@material-ui/core';
import { requiredValidator } from "../../commons/validators";

const TextInput = ({ nameField, labelField, typeField }) => (
    <Field
        id={nameField}
        name={nameField}
        validate={requiredValidator}
    >
        {({ input, meta }) => (
            <TextField
                type={typeField}
                label={labelField}
                value={input.value} onChange={input.onChange}
                error={meta.touched && meta.error} helperText={meta.touched && meta.error} />
        )}
    </Field>
);

export default TextInput;
