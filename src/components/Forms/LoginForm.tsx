import {
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    Input
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { logInSchema, ILogInSchema } from '../../schema/fomrSchema'
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from '../../config';
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from '../../redux/userSlice';


export const LogInForm = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user.users);
    console.log(state);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogInSchema>({
        resolver: zodResolver(logInSchema)
    });

    const onSubmit: SubmitHandler<ILogInSchema> = async (data) => {
        console.log("submit", data);
        // if correct data, then send request to supabase of user log in data
        const { data: logData, error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        });
        if (!error) {
            dispatch(logInUser(logData));
        } else {
            throw new Error(`Log in failed ${error}`)
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        {/* QUESTION: how to remove error from here? */}
        <Flex gap="3" direction="column">

            <FormControl isInvalid={errors.email}>
                <Input
                    id='email'
                    placeholder='email'
                    {...register('email')}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
                <Input
                    id='password'
                    placeholder='password'
                    type='password'
                    {...register('password')}
                />
                <FormErrorMessage>
                    {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
            <Center>
                <Button type="submit" maxW="md">Log in</Button>
            </Center>
        </Flex>

    </form>
}