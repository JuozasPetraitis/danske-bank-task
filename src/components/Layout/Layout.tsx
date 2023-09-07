import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { ROUTES } from "../../config/constants/constants";
import { Header, Footer, Sidebar } from "../index";
import danielCheung from "../../assets/star-wars-daniel-cheung.jpg";
import emmanuelDenier from "../../assets/star-wars-emmanuel-denier.jpg";
import michaelMarais from "../../assets/michael-marais.jpg";

export interface ContextType {
  isMobileMenuOpen: boolean;
  isMobileMenuOpenHandler: () => void;
}

const Layout = () => {
  const routeLocation = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [routeLocation.key, width]);

  const isMobileMenuOpenHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const renderImageBasedOnRoute = () => {
    switch (routeLocation.pathname) {
      case "/":
        return michaelMarais;
      case "/about":
        return emmanuelDenier;
      case "/films":
        return danielCheung;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto max-w-[1920px]" data-testid="layout-container">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={isMobileMenuOpenHandler}
      />

      <main className="relative min-h-[70vh] lg:min-h-[85vh]">
        <img
          src={renderImageBasedOnRoute()}
          alt={"Daniel Cheung"}
          className="absolute left-0 top-0 z-0 h-full w-full select-none object-cover opacity-80"
        />

        <div
          className={`relative z-10 mx-auto grid min-h-[85vh] max-w-screen-3xl ${
            routeLocation.pathname !== ROUTES.HOME.PATH
              ? "grid grid-cols-[1fr] lg:grid-cols-[30%,1fr]"
              : ""
          }`}
        >
          {routeLocation.pathname !== ROUTES.HOME.PATH && <Sidebar />}
          <Outlet
            context={
              {
                isMobileMenuOpen,
                isMobileMenuOpenHandler,
              } satisfies ContextType
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
