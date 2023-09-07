import { ROUTES } from "../../config/constants/constants";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="hidden min-h-[85vh] bg-gradient-to-b from-black via-black/80 to-black/10 px-4 py-8 lg:flex lg:flex-col lg:justify-between"
      data-testid="sidebar-container"
    >
      <div className="flex w-full flex-col justify-center gap-8">
        <p className="text-center font-Tektur text-3xl font-semibold text-white">
          Navigation
        </p>
        {Array.from(Object.values(ROUTES)).map(
          ({ TITLE, PATH }, index: number) => (
            <NavLink
              key={index}
              to={PATH}
              className={({ isActive }) =>
                `rounded-md px-8 py-2 text-center font-bold hover:bg-teal-600 hover:text-white ${
                  isActive
                    ? "bg-teal-900 text-white underline underline-offset-2"
                    : "bg-white text-black"
                }`
              }
            >
              {TITLE}
            </NavLink>
          ),
        )}
      </div>
    </div>
  );
};

export default Sidebar;
