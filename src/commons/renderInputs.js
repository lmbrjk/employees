import { TextInput, SelectInput, DateInput } from "../components/inputs";

export const renderInputs = (typeField, input) => {
    switch(typeField) {
        case 'select':
            return <SelectInput
                nameField={input.nameField} 
                labelField={input.labelField} 
                labels={input.labels}
            />;
        case 'date':
            return <DateInput 
                nameField={input.nameField} 
                labelField={input.labelField}
            />;
        default:
            return <TextInput 
                nameField={input.nameField} 
                labelField={input.labelField} 
                typeField={input.typeField}
            />;
    }
};