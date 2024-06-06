import './App.css'
import useSession from './hooks/useSession'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'

function App() {

  const { isLoggedIn } = useSession()

  return (<div>
    {isLoggedIn ? <HomePage /> : <LoginPage />}
  </div>)
}

export default App
