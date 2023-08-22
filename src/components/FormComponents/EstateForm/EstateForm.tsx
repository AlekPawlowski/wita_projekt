import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAddEstateSchema, addEstateSchema } from "../../../schema/formSchema"
import { Button, Flex, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { FormInput } from "../FormInput/FormInput"
import { estateFormFields } from "../../../formFieldsDetails/EstatesFormFields"
import { FormCheckbox } from "../FormCheckbox/FormCheckbox"
import { createNewEstate } from "../../../supabaseCall/estates/createNewEstate"
import { MARGIN_SPACE } from "../../../config"
import { IEstate } from "../../../interfaces/Iestate"
import { updateEstate } from "../../../supabaseCall/estates/updateEstate"
/**
 * to refactor all numbers to string (convert them in zod?)
 */
interface IEstateForm {
    formName: string
    data?: IEstate | null | undefined
}
/**
 * Estate form to add or change estate data
 * @param formName -> name for the form
 * @param data -> data of the form, if null go with empty
 */
export const EstateForm = ({ formName, data = null }: IEstateForm) => {
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
        if (!data) {
            // create new user
            createNewEstate(formData, navigate(-1));
        } else {
            updateEstate(formData);
        }
    }

    const submitForm = () => {
        console.log(errors);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>{formName}</Heading>
        {
            estateFormFields.map(field => {
                if (field.inputName == "avibility") {
                    return <FormCheckbox key={field.label} {...field} errors={errors} control={control} />
                }
                return <FormInput key={field.label} {...field} register={register} errors={errors} />
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

