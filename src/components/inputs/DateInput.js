import React from "react";

import { Field } from "react-final-form";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function MaterialUIPickers ({ nameField, labelField, birthday = "2021-04-07" }) {

    // const [selectedDate, setSelectedDate] = React.useState(birthday);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Field
                id={nameField}
                name={nameField}
            >                
                {({ input }) => (
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy-MM-dd"
                        margin="normal"
                        id={nameField}
                        label={labelField}
                        value={ input.value ? input.value : birthday }
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

