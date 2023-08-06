import { Fragment } from 'react'
import { LogInForm } from './components/Forms/LoginForm'
import { Center } from '@chakra-ui/react'

function App() {
    return (
        <Fragment>
            <Center minH="100vh">
                <LogInForm />
            </Center>
        </Fragment>
    )
}

export default App
