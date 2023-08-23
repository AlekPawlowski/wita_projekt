import { useSelector } from 'react-redux';
import { RoutesComponent } from './Routes/Routes';
import { Box, Container } from '@chakra-ui/react';
import { Navigation } from './components/Navigation/Navigation';
import { RootState } from './redux';

function App() {
    const state = useSelector((state: RootState) => state.user);
    const {isUserLoggedIn} = state;
    console.log(isUserLoggedIn);
    return (
        <Container maxW="1140">
            {isUserLoggedIn && <Box py="2"><Navigation /></Box>}
            <RoutesComponent />
        </Container>
    )
}

export default App
