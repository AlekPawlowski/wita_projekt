import { Text, FormControl, Checkbox, FormErrorMessage } from "@chakra-ui/react"
import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form"
import { MARGIN_SPACE } from "../../../config";

interface IFormCheckbox<T extends FieldValues> {
    inputName: Path<T>;
    label: string;
    errors: FieldErrors<T>;
    control: Control<T>
}

export function FormCheckbox<T extends FieldValues>({inputName: name, label, errors, control}: IFormCheckbox<T>) {
    return <FormControl isInvalid={true}>
        {/* avibility */}
        <Text display={"inline"} mr={MARGIN_SPACE}>{label}</Text>
        <Controller
            name={name}
            control={control}
            render={({ field }) => <Checkbox {...field} />}
        />
        <FormErrorMessage>
            {errors[name] && errors[name]?.message}
        </FormErrorMessage>
    </FormControl>
}