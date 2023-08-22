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
import { useMutation, useQueryClient } from "@tanstack/react-query"
/**
 * to refactor all numbers to string (convert them in zod?)
 */
interface IEstateForm {
    formName: string
    data?: IEstate
}
/**
 * Estate form to add or change estate data
 * @param formName -> name for the form
 * @param data -> data of the form, if null go with empty
 */
export const EstateForm = ({ formName, data }: IEstateForm) => {
    const isEditMode = data;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control
    } = useForm<IAddEstateSchema>({
        defaultValues: {
            adress: isEditMode ? `${data.adress}` : "",
            avibility: isEditMode ? data.avibility ? true : false : false,
            contract_end_date: isEditMode ? `${data.contract_end_date}` : "",
            contract_start_data: isEditMode ? `${data.contract_start_data}` : "",
            door_code: isEditMode ? `${data.door_code}` : "",
            keeper_name: isEditMode ? `${data.keeper_name}` : "",
            market_price: isEditMode ? String(data.market_price) : "",
            name: isEditMode ? `${data.name}` : "",
            owner_name: isEditMode ? `${data.owner_name}` : "",
            owner_phone_number: isEditMode ? String(data.owner_phone_number) : "",
            revanue: isEditMode ? String(data.revanue) : "",
            electricity_amount: isEditMode ? String(data.electricity_amount) : "",
            electricity_deadline: isEditMode ? `${data.electricity_deadline}` : "",
            rent_amount: isEditMode ? String(data.rent_amount) : "",
            rent_deadline: isEditMode ? `${data.rent_deadline}` : "",
            tax_amount: isEditMode ? String(data.tax_amount) : "",
            tax_deadline: isEditMode ? `${data.tax_deadline}` : "",
        },
        resolver: zodResolver(addEstateSchema)
    })

    const onSubmit: SubmitHandler<IAddEstateSchema> = async (formData) => {
        if (!isEditMode) {
            // create new user
            createNewEstate(formData, navigate(-1));
        } else {
            updateEstate(formData, data.id, navigate(-1));
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

