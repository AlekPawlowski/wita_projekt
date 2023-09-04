import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IUserFormSchema, userFormSchema } from "../../../schema/formSchema"
import { IAppUser } from "../../../interfaces/IAppusers";
import { Button, Heading, Select } from "@chakra-ui/react";
import { MARGIN_SPACE } from "../../../config";
import { employeeFormFields } from "../../../formFieldsDetails/EmployeeFormFields";
import { FormInput } from "../FormInput/FormInput";
import { useNavigate } from "react-router-dom";

interface IEmployeeForm {
    formName: string;
    data?: IAppUser
}

export const EmployeeForm = ({formName, data}: IEmployeeForm) => {
    const isEditMode = !!data;
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        // control
    } = useForm<IUserFormSchema>({
        defaultValues: {
            user_name: isEditMode ? `${data.user_name}` : "",
            acces_level: isEditMode ? `${data.acces_level}` : "",
            email: isEditMode ? `${data.email}` : "",
            location: isEditMode ? `${data.location}` : "",
            phone_number: isEditMode ? data.phone_number : 0
        },
        resolver: zodResolver(userFormSchema)
    })

    const onSubmit: SubmitHandler<IUserFormSchema> = async (formData) => {
        console.log(formData);
        // in case of edit employee rember to update also in estates db
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h2" size="md" my={MARGIN_SPACE}>{formName}</Heading>
        {
            employeeFormFields.map((field) => {
                if(field.inputName === "acces_level") {
                    return <Select {...register("acces_level")} placeholder="Select occupation">
                        <option value="admin">Administrator</option>
                        <option value="account">Account</option>
                        <option value="employee">Employee</option>
                    </Select>
                }
                return <FormInput<IUserFormSchema> 
                    key={field.label}
                    {...field}
                    errors={errors}
                    register={register}
                />
            })
        }
        <Button isLoading={isSubmitting} type="submit">{isEditMode ? "Edit user" : "Add user"}</Button>
        <Button type="button" onClick={() => navigate(-1)}>
                Cancel
        </Button>
    </form>
}