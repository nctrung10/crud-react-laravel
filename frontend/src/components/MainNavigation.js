import { NavLink, Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Admin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink 
              to="/"
              className={({isActive}) => isActive ? 'nav-link active text-primary' : 'nav-link'}
            >
              Home
            </NavLink>
            <NavLink 
              to='users'
              className={({isActive}) => isActive ? 'nav-link active text-primary' : 'nav-link'}
            >
              Users
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;