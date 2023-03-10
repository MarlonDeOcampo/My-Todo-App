import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="h-14 w-full flex flex-row justify-between items-center fixed-top px-20 bg-secondary text-white">
      <div className="text-3xl font-bold ">Logo</div>
      <button className="font-semibold" onClick={() => navigate("/")}>
        {location.pathname === "/" ? null : <p>Logout</p>}
      </button>
    </nav>
  );
};

export default Navbar;
