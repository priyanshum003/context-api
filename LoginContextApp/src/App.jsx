import { useContext } from 'react';
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1> Context API </h1>
      {
        user ? <Profile /> : <Login />
      }
    </div>
  )
}

export default App
