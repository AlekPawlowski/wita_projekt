import { Text, FormControl, Checkbox, FormErrorMessage } from "@chakra-ui/react"
import { Control, Controller, FieldErrors, Path } from "react-hook-form"
import { IAddEstateSchema } from "../../../schema/fomrSchema";

interface IFormCheckbox {
    inputName: Path<IAddEstateSchema>;
    label: string;
    errors: FieldErrors<IAddEstateSchema>;
    control: Control<IAddEstateSchema>
}

export const FormCheckbox = ({inputName: name, label, errors, control}: IFormCheckbox) => {
    return <FormControl isInvalid={true}>
        {/* avibility */}
        <Text>{label}</Text>
        <Controller
            name="avibility"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
        />
        <FormErrorMessage>
            {errors[name] && errors[name]?.message}
        </FormErrorMessage>
    </FormControl>
}