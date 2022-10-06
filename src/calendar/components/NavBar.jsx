import { useAuthStore } from "../../hooks"

export const NavBar = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 text-white">
      <span>
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        {user.name}
      </span>

      <button
        onClick={startLogout}
        className="btn btn-outline-danger"
      >
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
