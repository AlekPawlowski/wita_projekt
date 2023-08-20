import { FormControl, InputGroup, InputLeftAddon, Input, FormErrorMessage } from "@chakra-ui/react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { IAddEstateSchema } from "../../../schema/formSchema";

interface FormInput {
    inputName: Path<IAddEstateSchema>;
    label: string;
    errors: FieldErrors<IAddEstateSchema>;
    register: UseFormRegister<IAddEstateSchema>
    value?: string;
}

export const FormInput = ({ inputName: name, label, errors, register, value = "" }: FormInput) => {
    return <FormControl isInvalid={!!errors[name]?.message} mb={2}>
        <InputGroup size='sm'>
            <InputLeftAddon children={label} />
            <Input
                id={name}
                placeholder={name}
                defaultValue={value}
                {...register(`${name}`)}
            />
        </InputGroup>
        <FormErrorMessage>
            {errors[name] && errors[name]?.message}
        </FormErrorMessage>
    </FormControl>
}