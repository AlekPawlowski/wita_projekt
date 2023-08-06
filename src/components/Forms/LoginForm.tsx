import {
    Button,
    FormControl,
    Input
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { logInSchema, ILogInSchema } from '../../schema/fomrSchema'

export const LogInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogInSchema>();

    const onSubmit: SubmitHandler<ILogInSchema> = (data) => {
        console.log("submit", data);
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl colorScheme='brand'>
            <Input
                id='email'
                placeholder='email'
                {...register('mail')}
            />
            <Input 
                id='password'
                placeholder='password'
                type='password'
                {...register('password')}
            />
            formularz do logowania
            <Button type="submit">Log in</Button>
        </FormControl>
    </form>
}