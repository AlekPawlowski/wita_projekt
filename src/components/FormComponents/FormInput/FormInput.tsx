/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FormControl, InputGroup, InputLeftAddon, Input, FormErrorMessage } from "@chakra-ui/react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormInput<T extends FieldValues> {
    inputName: Path<T>;
    label: string;
    errors: FieldErrors<T>;
    register: UseFormRegister<T>
}

export function FormInput<T extends FieldValues>({ inputName: name, label, errors, register }: FormInput<T>) {
    return <FormControl isInvalid={!!errors[name]?.message} mb={2}>
        <InputGroup size='sm'>
            <InputLeftAddon children={label} />
            <Input
                id={name}
                placeholder={name}
                {...register(name)}
            />
        </InputGroup>
        <FormErrorMessage>
            {/* @ts-ignore: Suppress all errors on the next line */}
            {errors[name] && errors[name]?.message}
        </FormErrorMessage>
    </FormControl>
}