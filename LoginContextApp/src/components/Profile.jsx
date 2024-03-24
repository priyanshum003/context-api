import { useContext } from 'react'
import UserContext from '../context/UserContext';
import Button from '@mui/material/Button';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);

    if (!user) {
        return <div>Login to view profile</div>
    }
    return (
        <>
            <div>
                <h2>Profile</h2>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
            </div>
            <div>
                <Button variant="contained" onClick={() => setUser(null)}>Logout</Button>
            </div>
        </>
    )
}

export default Profile