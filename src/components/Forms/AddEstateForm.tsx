import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IAddEstateSchema, addEstateSchema } from "../../schema/fomrSchema"
import { Text, Button, Checkbox, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../config"

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
        let { data: estate, error } = await supabase
            .from('estate')
            .select("*")
            .eq('adress', formData.adress)
            .eq('owner_name', formData.owner_name)

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
            console.log(error, newEstate)
            alert("Correctly added to datebase");
            navigate(-1)
        }

    }

    const submitForm = () => {
        console.log(errors);

    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        form to add new estate
        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Estate adress' />
                <Input
                    id='adress'
                    placeholder='adress'
                    {...register('adress')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.adress && errors.adress.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            {/* avibility */}
            <Text>Is estate avibility </Text>
            <Controller
                name="avibility"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
            />
            <FormErrorMessage>
                {errors.avibility && errors.avibility.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Door code ' />

                <Input
                    id='door_code'
                    placeholder="door code (optional)"
                    {...register('door_code')}
                />
            </InputGroup>
            <FormErrorMessage>
            </FormErrorMessage>
        </FormControl>

        {/* keeper name */}
        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Keeper name' />
                <Input
                    id='keeper_name'
                    placeholder="keeper name"
                    {...register('keeper_name')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.keeper_name && errors.keeper_name.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            {/* market price */}
            <InputGroup size='sm'>
                <InputLeftAddon children='Market price' />
                <Input
                    id="market_price"
                    type="number"
                    placeholder="market price"
                    {...register('market_price', { setValueAs: (v) => v === "" ? undefined : parseInt(v, 10), })}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.market_price && errors.market_price.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Estate name' />
                {/* estate name */}
                <Input
                    id="name"
                    placeholder="name of estate"
                    {...register('name')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.name && errors.name.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Owner name' />
                {/* owner name */}
                <Input
                    id="owner_name"
                    placeholder="estate owner name"
                    {...register('owner_name')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.owner_name && errors.owner_name.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Owner phone number' />
                {/* owner phone number */}
                <Input
                    id="owner_phone_number"
                    placeholder="Owner phone number"
                    {...register('owner_phone_number')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.owner_phone_number && errors.owner_phone_number.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Estate Revanue' />
                {/* estate revanue */}
                <Input
                    id="revanue"
                    type="number"
                    placeholder="revanue"
                    {...register('revanue', { setValueAs: (v) => v === "" ? undefined : parseInt(v, 10), })}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.revanue && errors.revanue.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Electicity bill ammount' />
                {/* electricity */}
                <Input
                    id="electricity_amount"
                    placeholder="electicity bill ammout"
                    type="number"
                    {...register('electricity_amount', { setValueAs: (v) => v === "" ? undefined : parseInt(v, 10), })}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.electricity_amount && errors.electricity_amount.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='electicity bill deadline' />
                <Input
                    id="electricity_deadline"
                    placeholder="electricity deadline day of the month"
                    {...register('electricity_deadline')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.electricity_deadline && errors.electricity_deadline.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Rent bill ammout' />
                {/* rent */}
                <Input
                    id="rent_amount"
                    placeholder="rent bill ammout"
                    type="number"
                    {...register('rent_amount', { setValueAs: (v) => v === "" ? undefined : parseInt(v, 10), })}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.rent_amount && errors.rent_amount.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Rent bill deadline' />
                <Input
                    id="rent_deadline"
                    placeholder="rent deadline day of the month"
                    {...register('rent_deadline')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.rent_deadline && errors.rent_deadline.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Tax bill ammout' />
                {/* tax */}
                <Input
                    id="tax_amount"
                    placeholder="tax bill ammout"
                    type="number"
                    {...register('tax_amount', { setValueAs: (v) => v === "" ? undefined : parseInt(v, 10), })}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.tax_amount && errors.tax_amount.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Tax bill deadline' />
                <Input
                    id="tax_deadline"
                    placeholder="tax deadline day of the month"
                    {...register('tax_deadline')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.tax_deadline && errors.tax_deadline.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Contract end data' />
                <Input
                    id="contract_end_date"
                    placeholder="Contract end data"
                    type="date"
                    {...register('contract_end_date')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.contract_end_date && errors.contract_end_date.message}
            </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={true}>
            <InputGroup size='sm'>
                <InputLeftAddon children='Contract start data' />
                <Input
                    id="contract_start_data"
                    placeholder="Contract end data"
                    type="date"
                    {...register('contract_start_data')}
                />
            </InputGroup>
            <FormErrorMessage>
                {errors.contract_start_data && errors.contract_start_data.message}
            </FormErrorMessage>
        </FormControl>

        <Flex align="center" justify="space-around">
            <Button isLoading={isSubmitting} type="submit" onClick={submitForm} >Add estate</Button>
            {/* <Button isLoading={isSubmitting} type="submit"  >Add estate</Button> */}
            <Button type="button" onClick={() => navigate(-1)}>
                Cancel
            </Button>
        </Flex>
    </form >
}