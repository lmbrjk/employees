import React from "react";

import { Field } from "react-final-form";

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function MaterialUIPickers ({ nameField, labelField }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Field
                id={nameField}
                name={nameField}
            >                
                {({ input }) => (
                    <KeyboardDatePicker
                        autoOk={true}
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id={nameField}
                        label={labelField}
                        value={ input.value ? input.value : null }
                        onChange={ input.onChange }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                )}
                
            </Field>
        </MuiPickersUtilsProvider>
    );
};

