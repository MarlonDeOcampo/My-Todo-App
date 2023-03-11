import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingScreen from "../loadingScreen";
import WarningModal from "../modals/warning-modal";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    setIsWarning((prev) => !prev);
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function toggleWarning() {
    setIsWarning((prev) => !prev);
  }

  return (
    <nav className="h-14 w-full flex flex-row justify-between items-center fixed-top px-4 sm:px-20 md:px-10 bg-secondary text-white">
      <div className="text-3xl font-bold ">My Todo App</div>
      <button className="font-semibold" onClick={() => toggleWarning()}>
        {location.pathname === "/" ? null : <p>Logout</p>}
      </button>
      {isLoading ? <LoadingScreen /> : null}
      {isWarning ? (
        <WarningModal
          message="Are you sure You want to logout?"
          title="Logout"
          toggleWarningModal={toggleWarning}
          onConfirm={handleLogout}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
