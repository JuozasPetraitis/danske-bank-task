import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { ContextType } from "../Layout/Layout";
import { ROUTES, SCREEN_BREAKPOINTS } from "../../config/constants/constants";
import Button from "../../common/Button";
import Title from "../../common/Title";

const Introduction = () => {
  const { isMobileMenuOpen, isMobileMenuOpenHandler } =
    useOutletContext<ContextType>();
  const routeLocation = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex h-full w-11/12 flex-grow flex-col justify-center gap-8 md:gap-16">
      <Title className="font-Tektur">Welcome to Stars Wars Universe!</Title>

      <Title
        size="sm"
        className="mx-auto max-w-2xl font-SedgwickAveDisplay tracking-widest"
      >
        Are you ready to embark on an intergalactic journey to explore the
        iconic Star Wars universe?
      </Title>

      <Button
        color="secondary"
        size="lg"
        onClick={() => {
          if (
            !isMobileMenuOpen &&
            window.innerWidth < SCREEN_BREAKPOINTS.LAPTOP
          ) {
            isMobileMenuOpenHandler();
          }

          if (
            routeLocation.pathname === ROUTES.HOME.PATH &&
            window.innerWidth > SCREEN_BREAKPOINTS.LAPTOP
          ) {
            navigate(ROUTES.FILMS.PATH);
          }
        }}
        disabled={isMobileMenuOpen}
        className="self-center font-Tektur"
        data-testid="get-started"
      >
        Get started
      </Button>
    </div>
  );
};

export default Introduction;
