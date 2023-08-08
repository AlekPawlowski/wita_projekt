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
import { useDispatch } from "react-redux";
import { ILoggedUser, logInUser } from '../../redux/userSlice';
import { IAppUsers } from '../../interfaces/IAppusers';


export const LogInForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogInSchema>({
        resolver: zodResolver(logInSchema)
    });

    const onSubmit: SubmitHandler<ILogInSchema> = async (data) => {

        // correction of architecture, is this ok to have this here or meaby it should be in
        // some other directory like "supabaseCalls" or something like this

        // if correct data, then send request to supabase of user log in data
        const { data: logData, error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        });
        console.log("log data", logData)

        if (!error) {
            // get specific user data and add him to global state and to localstorage
            const email = logData.user.email;

            const { data: app_users } = await supabase
                .from('app_users')
                .select("*")
                .eq('email', email)
            
            
            // set logged user
            console.log("app user",app_users)
            if (app_users && app_users?.length > 0) {
                const user: ILoggedUser = {
                    user: app_users[0] as IAppUsers,
                    isUserLoggedIn: true,
                };
                dispatch(logInUser(user));
            } else {
                throw new Error (`Brak pasującego adresu email, sprawdź w bazie ${email}`)
            }

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