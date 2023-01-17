import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const Profile = () => {
  const { setUserAuth } = useContext(UserContext)
  const navigate = useNavigate()
  function handleLogout() {
    setUserAuth(null)
    localStorage.removeItem("jwt")
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default Profile
