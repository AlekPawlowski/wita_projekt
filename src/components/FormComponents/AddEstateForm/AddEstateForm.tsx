import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAddEstateSchema, addEstateSchema } from "../../../schema/formSchema"
import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../../config"
import { FormInput } from "../FormInput/FormInput"
import { estateFormFields } from "../../Estate/EstatesFormFields"
import { FormCheckbox } from "../FormCheckbox/FormCheckbox"
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
        // create new record in supabase
        /**
         * first check if estate that we wanna add exist in db
         * by given params:
         * @param adress -> estate adress
         * @param owner_name -> owner of the estate
         * 
         */
        const { data: estate, error } = await supabase
            .from('estate')
            .select("*")
            .eq('adress', formData.adress)
            .eq('owner_name', formData.owner_name)

        if(error){
            throw new Error(`erorr in find element ${error}`)
        }
        // if estate exist and it's length is greater then 0, then privided data exist in db so there is no need to send it.
        // just put alert on the screen so the user can know that it's exist
        if(estate && estate.length !== 0){
            alert("this estate exist in db, add diffrent estate")
        }else{
            const { data: newEstate, error } = await supabase
                .from('estate')
                .insert([
                    {...formData}
                ])
                .select()

            if(error){
                throw new Error(`erorr in push to db ${error}`)
            }
            console.log(newEstate);
            alert("Correctly added to datebase");
            navigate(-1)

        }

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