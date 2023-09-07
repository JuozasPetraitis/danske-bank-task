import { Link } from "react-router-dom";
import { ROUTES } from "../config/constants/constants";
import satellite from "../assets/satellite.png";
import astronautHelmer from "../assets/astronout-helmet.png";
import ufoSpaceShip from "../assets/ufo-spaceship.png";

const ErrorPage = () => {
  return (
    <div className="absolute h-screen w-full overflow-hidden">
      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-8 font-semibold">
        <p className="lg:text-7xl">Error - 404</p>
        <p className="text-4xl">Page Not Found</p>
        <Link
          to={ROUTES.HOME.PATH}
          className="rounded-md bg-teal-900 px-12 py-4 text-center font-bold text-white hover:bg-teal-600 hover:text-white hover:underline hover:underline-offset-2"
        >
          Go to Home Page
        </Link>
      </div>

      <img
        src={satellite}
        alt=""
        className="absolute left-[11%] top-[12%] h-[300px] w-[300px] animate-spin-slow"
      />

      <img
        src={astronautHelmer}
        alt=""
        className="absolute left-[43%] top-[47%] h-[200px] w-[200px] animate-spin-slow lg:left-[36%] lg:top-[38%]"
      />

      <img
        src={ufoSpaceShip}
        alt=""
        className="absolute left-[63%] top-[22%] h-[400px] w-[400px] animate-spin-slow"
      />

      <img
        src={ufoSpaceShip}
        alt=""
        className="absolute left-[-4%] top-[72%] h-[400px] w-[400px] animate-spin-slow lg:left-[8%] lg:top-[72%]"
      />
    </div>
  );
};

export default ErrorPage;
