import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../components/index";
import { ROUTES } from "../constants/constants";
import { AboutPage, FilmsPage, HomePage } from "../../pages";
import ErrorPage from "../../pages/ErrorPage";

const Router = () => (
  <div data-testid="router">
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME.PATH} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.ABOUT.PATH} element={<AboutPage />} />
          <Route path={ROUTES.FILMS.PATH} element={<FilmsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Router;
