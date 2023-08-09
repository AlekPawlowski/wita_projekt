import { useSelector } from 'react-redux';
import { RoutesComponent } from './Routes/Routes';
import { Box, Button, Container } from '@chakra-ui/react';
import { Navigation } from './components/Navigation/Navigation';
import { Link } from 'react-router-dom';

function App() {
    const state = useSelector((state) => state.user);
    const {isUserLoggedIn} = state;
    
    return (
        <Container maxW="1140">
            {isUserLoggedIn && <Box py="2"><Navigation /></Box>}
            <RoutesComponent />
        </Container>
    )
}

export default App
