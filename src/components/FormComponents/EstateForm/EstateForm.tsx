/* eslint-disable @typescript-eslint/ban-ts-comment */
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

interface IEstateForm {
    formName: string
    data?: IEstate
}

export const parseToNumber=(x:unknown)=>{
    const parsed=Number(x)
    return Number.isNaN(x) ? 0 : parsed
}

/**
 * Estate form to add or change estate data
 * @param formName -> name for the form
 * @param data -> data of the form, if null go with empty
 */
export const EstateForm = ({ formName, data }: IEstateForm) => {
    const isEditMode = !!data;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control
    } = useForm<IAddEstateSchema>({
        defaultValues: {
            adress: isEditMode ? `${data.adress}` : "",
            avibility: isEditMode ? data.avibility : false,
            contract_end_date: isEditMode ? `${data.contract_end_date}` : "",
            contract_start_data: isEditMode ? `${data.contract_start_data}` : "",
            door_code: isEditMode ? `${data.door_code}` : "",
            keeper_name: isEditMode ? `${data.keeper_name}` : "",
            keeper_phone_number: isEditMode ? parseToNumber(data.keeper_phone_number) : 0,
            market_price: isEditMode ? parseToNumber(data.market_price) : 0,
            name: isEditMode ? `${data.name}` : "",
            owner_name: isEditMode ? `${data.owner_name}` : "",
            owner_phone_number: isEditMode ? parseToNumber(data.owner_phone_number) : 0,
            revanue: isEditMode ? parseToNumber(data.revanue) : 0,
            electricity_amount: isEditMode ? parseToNumber(data.electricity_amount) : 0,
            electricity_deadline: isEditMode ? `${data.electricity_deadline}` : "",
            rent_amount: isEditMode ? parseToNumber(data.rent_amount) : 0,
            rent_deadline: isEditMode ? `${data.rent_deadline}` : "",
            tax_amount: isEditMode ? parseToNumber(data.tax_amount) : 0,
            tax_deadline: isEditMode ? `${data.tax_deadline}` : "",
        },
        resolver: zodResolver(addEstateSchema)
    })

    const onSubmit: SubmitHandler<IAddEstateSchema> = async (formData) => {
        if (!isEditMode) {
            // create new user
            await createNewEstate(formData);
        } else {
            await updateEstate(formData, data.id);
        }
        navigate(-1)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>{formName}</Heading>
        {
            estateFormFields.map(field => {
                if (field.inputName == "avibility") {
                    return <FormCheckbox<IAddEstateSchema>
                        key={field.label}
                        {...field}
                        errors={errors}
                        control={control}
                    />
                }
                return <FormInput<IAddEstateSchema>
                    key={field.label}
                    {...field}
                    register={register}
                    errors={errors}
                />
            })
        }

        <Flex align="center" justify="space-around">
            <Button isLoading={isSubmitting} type="submit">{isEditMode ? "Edit estate" : "Add estate"}</Button>
            {/* <Button isLoading={isSubmitting} type="submit"  >Add estate</Button> */}
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form >
}

