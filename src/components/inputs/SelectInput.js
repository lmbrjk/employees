import React from "react";

import { Field } from "react-final-form";

import { FormControl, InputLabel, NativeSelect } from "@material-ui/core/";

const SelectInput = ({ nameField, labelField, labels }) => (
  <Field name={nameField} component="select" id={nameField}>
    {({ input }) => (
      <FormControl>
        <InputLabel htmlFor={nameField}>{labelField}</InputLabel>
        <NativeSelect
          label={labelField}
          value={input.value}
          onChange={input.onChange}
          id={nameField}
        >
          {labels.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    )}
  </Field>
);

export default SelectInput;
