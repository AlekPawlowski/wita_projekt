import { SubmitHandler, useForm } from "react-hook-form"
import { IFailureSchema, failureSchema } from "../../../schema/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FailureFormFields } from "../../../formFieldsDetails/FailureFormFields"
import { FormCheckbox } from "../FormCheckbox/FormCheckbox"
import { FormInput } from "../FormInput/FormInput"
import { Flex, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { addNewFailure } from "../../../supabaseCall/failures/createNewFailure"

type IFailureForm = {
    estateId?: string;
}
/**
 * should contain some data, mostly id of estate to know where to put it
 */
export const FailuresForm = ({estateId}: IFailureForm) => {
    const isEstateKnown = estateId;

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control
    } = useForm<IFailureSchema>({
        defaultValues: {
            failure_description: "",
            estate_id: isEstateKnown ? estateId : "",
            status: false
        },
        resolver: zodResolver(failureSchema)
    })

    const onSubmit: SubmitHandler<IFailureSchema> = async (formData) => {
        console.log(formData);
        addNewFailure(formData);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        {
            FailureFormFields.map(field => {
                if (field.inputName == "status") {
                    return <FormCheckbox
                        key={field.label}
                        {...field}
                        errors={errors}
                        control={control}
                    />
                }
                return <FormInput<IFailureSchema>
                    key={field.label}
                    {...field}
                    register={register}
                    errors={errors}
                />
            })
        }
        <Flex align="center" justify="space-around">
            <Button isLoading={isSubmitting} type="submit" >Add failures</Button>
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form>
}