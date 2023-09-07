import { Bars4Icon } from "@heroicons/react/24/solid";
import { MobileMenu } from "../index";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../config/constants/constants";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HeaderProps) => {
  const routeLocation = useLocation();

  return (
    <>
      <header className="mx-auto flex h-[10vh] max-w-screen-3xl items-center justify-between px-4">
        <Link
          to={ROUTES.HOME.PATH}
          className="flex-1 cursor-pointer text-center font-Tektur text-4xl font-black lg:text-8xl"
          reloadDocument={routeLocation.pathname === ROUTES.HOME.PATH}
        >
          Star Wars
        </Link>

        <button
          className="lg:hidden"
          onClick={setIsMobileMenuOpen}
          data-testid="hamburger-button"
        >
          <Bars4Icon className="h-10 w-10" />
        </button>
      </header>

      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
};

export default Header;
