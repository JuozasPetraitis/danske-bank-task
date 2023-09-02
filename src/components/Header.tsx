import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="mx-auto flex h-[10vh] max-w-screen-3xl items-center justify-between px-4">
      <p className="font-Tektur flex-1 cursor-default text-center text-4xl font-black md:text-8xl">
        Star Wars
      </p>

      <HamburgerMenu />
    </header>
  );
};

export default Header;
