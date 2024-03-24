import { useState, useContext } from 'react'
import UserContext from '../context/UserContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField id="username" label="Username" variant="outlined"
                        onChange={(e) => setUsername(e.target.value)} value={username}
                        sx={{
                            width: '300px',
                            margin: '10px 0',
                            '& input': {
                                color: 'black',
                                backgroundColor: 'white',
                            },
                        }}
                    />
                    <TextField id="password" label="Password" variant="outlined"
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        sx={{
                            width: '300px',
                            margin: '10px 0',
                            '& input': {
                                color: 'black',
                                backgroundColor: 'white',
                            },
                        }}
                    />
                </Box>
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    )
}

export default Login