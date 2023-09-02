import { Bars4Icon } from "@heroicons/react/24/solid";

const HamburgerMenu = () => {
  return (
    <button className="md:hidden">
      <Bars4Icon className="h-10 w-10" />
    </button>
  );
};

export default HamburgerMenu;
