import { SubmitHandler, useForm } from "react-hook-form"
import { IFailureSchema, failureSchema } from "../../../schema/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FailureFormFields } from "../../../formFieldsDetails/FailureFormFields"
import { FormCheckbox } from "../FormCheckbox/FormCheckbox"
import { FormInput } from "../FormInput/FormInput"
import { Flex, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { addNewFailure } from "../../../supabaseCall/failures/createNewFailure"
import { udpateFailure } from "../../../supabaseCall/failures/updateFailure"
import { IFailures } from "../../../interfaces/Ifailures"
import { IEstateFailData } from "../../../interfaces/Iestate"

type IFailureForm = {
    estateData: IEstateFailData;
    title: string;
    failureObj?: IFailures;
}
/**
 * should contain some data, mostly id of estate to know where to put it
 */
export const FailuresForm = ({failureObj, estateData, title}: IFailureForm) => {
    console.log("data estate", estateData)
    // if failure id known, then update
    const isFailureObjKnown = !!failureObj;
    const navigate = useNavigate();    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control
    } = useForm<IFailureSchema>({
        defaultValues: {
            failure_title: isFailureObjKnown ? failureObj.failure_title : "",
            failure_description: isFailureObjKnown ? failureObj.failure_description : "",
            estate_id: estateData.id,
            failue_estate_name: estateData.name ? estateData.name : "",
            status: isFailureObjKnown ? failureObj.status : false,
        },
        resolver: zodResolver(failureSchema)
    })

    const onSubmit: SubmitHandler<IFailureSchema> = async (formData) => {
        if(!isFailureObjKnown){
            addNewFailure(formData);
        }else{
            udpateFailure(failureObj.id, formData);
        }
        navigate(-1)
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
            <Button isLoading={isSubmitting} type="submit" >{title}</Button>
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form>
}