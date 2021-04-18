import { TextInput, SelectInput, DateInput } from "../components/inputs";

type InputType = {
    nameField: string,
    labelField: string,
    typeField?: string,
    labels?: Array<string>
};

export const renderInputs = (typeField: string, input: InputType) => {
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