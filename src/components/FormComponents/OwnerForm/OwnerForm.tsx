import { SubmitHandler, useForm } from "react-hook-form";
import { IOwners } from "../../../interfaces/Iowners"
import { IOwnersSchema, ownersSchema } from "../../../schema/formSchema";
import { parseToNumber } from "../EstateForm/EstateForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { MARGIN_SPACE } from "../../../config";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { ownersFormFields } from "../../../formFieldsDetails/OwnersFormFields";
import { FormInput } from "../FormInput/FormInput";
import { createNewOwner } from "../../../supabaseCall/owners/createNewOwner";
import { updateOwner } from "../../../supabaseCall/owners/updateOwner";

interface IOwnerForm {
    formName: string;
    ownerData?: IOwners
}
export const OwnerForm = ({ ownerData, formName }: IOwnerForm) => {
    const isEditMode = !!ownerData;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<IOwnersSchema>({
        defaultValues: {
            name: isEditMode ? `${ownerData.name}` : "",
            phone_number: isEditMode ? parseToNumber(ownerData.phone_number) : 0
        },
        resolver: zodResolver(ownersSchema)
    });
    const onSubmit: SubmitHandler<IOwnersSchema> = async (formData) => {
        console.log(formData);
        if (!isEditMode) {
            // create new owner element
            await createNewOwner(formData, true);
        } else {
            // update owner data
            await updateOwner(String(ownerData.phone_number), formData);
        }
        // navigate('/owners');
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h1" size="md" my={MARGIN_SPACE}>{formName}</Heading>
        {
            ownersFormFields.map(field => {
                return <FormInput<IOwnersSchema>
                    key={field.label}
                    {...field}
                    register={register}
                    errors={errors}
                />
            })
        }
        <Flex align="center" justify="space-around">
            <Button isLoading={isSubmitting} type="submit">{isEditMode ? "Edit owner" : "Add owner"}</Button>
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form>
}