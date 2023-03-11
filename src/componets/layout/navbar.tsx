import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="h-14 w-full flex flex-row justify-between items-center fixed-top px-4 sm:px-20 md:px-10 bg-secondary text-white">
      <div className="text-3xl font-bold ">My Todo App</div>
      <button className="font-semibold" onClick={() => navigate("/")}>
        {location.pathname === "/" ? null : <p>Logout</p>}
      </button>
    </nav>
  );
};

export default Navbar;
