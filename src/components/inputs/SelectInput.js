import React from "react";

import { Field } from "react-final-form";

import NativeSelect from "@material-ui/core/NativeSelect";

const SelectInput = ({ /*initialPost = labels[0],*/ nameField, labelField, labels }) => (
    <Field
        name={nameField}
        component="select"
        id={nameField}                                                                           
    >
        {({ input }) => (
            <NativeSelect
                defaultValue={/*initialPost*/labels[0]}
                label={labelField}
                value={input.value} onChange={input.onChange}
                id={input.nameField}
            >
                {   
                    labels.map(option => 
                        <option  key={option} value={option}>{option}</option>
                    )
                }
            </NativeSelect> 
        )}
    </Field>
);

export default SelectInput;