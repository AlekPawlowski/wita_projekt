import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAddEstateSchema, addEstateSchema } from "../../../schema/formSchema"
import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../../config"
import { FormInput } from "../FormInput/FormInput"
import { estateFormFields } from "../../Estate/EstatesFormFields"
import { FormCheckbox } from "../FormCheckbox/FormCheckbox"
import { createNewEstateOwner } from "../../../supabaseCall/createNewEstateOwner"
/**
 * to refactor all numbers to string (convert them in zod?)
 */

export const AddEstateForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control
    } = useForm<IAddEstateSchema>({
        resolver: zodResolver(addEstateSchema)
    })

    const onSubmit: SubmitHandler<IAddEstateSchema> = async (formData) => {
        createNewEstateOwner(formData, navigate(-1));
    }

    const submitForm = () => {
        console.log(errors);

    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        form to add new estate
        {
            estateFormFields.map(field => {
                if(field.inputName == "avibility") {
                    return <FormCheckbox key={field.label} {...field} errors={errors} control={control}/>
                }
                return <FormInput key={field.label} {...field} register={register} errors={errors}/>
            })
        }

        <Flex align="center" justify="space-around">
            <Button isLoading={isSubmitting} type="submit" onClick={submitForm} >Add estate</Button>
            {/* <Button isLoading={isSubmitting} type="submit"  >Add estate</Button> */}
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form >
}