import { Link } from "react-router-dom";
import { ROUTES } from "../../config/constants/constants";

const MobileMenu = () => (
  <div
    className="absolute left-0 right-0 top-[10%] z-20"
    data-testid="mobile-menu-container"
  >
    <div className="flex flex-col items-center gap-6 bg-black p-6 font-bold text-white">
      {Array.from(Object.values(ROUTES)).map(({ TITLE, PATH }, i) => (
        <Link key={i} to={PATH} className="">
          {TITLE}
        </Link>
      ))}
    </div>
  </div>
);

export default MobileMenu;
