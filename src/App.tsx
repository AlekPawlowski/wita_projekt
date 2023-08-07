import { Fragment } from 'react'
import { LogInScreen } from './components/Screens/LogInScreen'
import { useSelector } from "react-redux"
import { HomePage } from './components/Screens/HomePage';

function App() {
    const state = useSelector((state) => state.user.user);
    const { isUserLoggedIn } = state;
    return (
        <Fragment>
            {
                isUserLoggedIn ? <HomePage /> : <LogInScreen />
            }
        </Fragment>
    )
}

export default App
