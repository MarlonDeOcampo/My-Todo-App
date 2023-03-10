import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-20 bg-[#F5F5F5] h-[92vh] overflow-none">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
