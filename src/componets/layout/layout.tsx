import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 sm:px-20 md:px-10 bg-[#F5F5F5] h-[92vh] overflow-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
