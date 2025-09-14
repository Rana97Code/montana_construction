
import { Link, useLocation, useRoutes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { routes } from "./route";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { CircleLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRoutes(routes);
  const location = useLocation();

  const excludeHeaderFooterPaths = ["/dashboard", "/admin/login"];
  const shouldShowHeaderFooter = !excludeHeaderFooterPaths.includes(
    location.pathname
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircleLoader color={"#111E40"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          {shouldShowHeaderFooter && <Header />}
          <div className="overflow-x-hidden">
            {router}
          </div>

          {shouldShowHeaderFooter && <Footer />}
          <span
            className={`fixed bottom-10 ${showWhatsApp ? "left-10" : "-left-[200px]"
              } bg-green-500 text-white rounded-full p-2 text-2xl cursor-pointer transition-all duration-300`}
          >
            <Link
              to="https://wa.me/880170000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </Link>
          </span>
          <button
            onClick={scrollToTop}
            className={`fixed transition-all duration-300 right-10 bg-[#3689ce] text-white p-3 rounded-full shadow-lg z-20 animate-bounce ${showScrollTop ? "bottom-10" : "-bottom-[250px]"
              }`}
          >
            <FaArrowUp />
          </button>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default App;
