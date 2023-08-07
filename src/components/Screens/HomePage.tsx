import { Fragment } from "react"
import { useSelector } from "react-redux"

export const HomePage = () => {
    const state = useSelector((state) => state.user.user);
    const {userAccessLevel, userEmail} = state;
    return <Fragment>
        Hello {userEmail}, you are logged in as {userAccessLevel}
    </Fragment>
}