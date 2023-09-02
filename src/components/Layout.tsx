import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import danielCheung from "../assets/star-wars-daniel-cheung.jpg";

const Layout = () => {
  return (
    <div className="mx-auto max-w-[3840px]">
      <Header />

      <main className="relative min-h-[50vh] md:min-h-[85vh]">
        <img
          src={danielCheung}
          alt={""}
          className="absolute left-0 top-0 z-0 h-full w-full select-none object-cover opacity-60"
        />

        <div className="z-1 absolute mx-auto h-full w-full max-w-screen-3xl">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
