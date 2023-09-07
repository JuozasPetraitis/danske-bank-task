import { useEffect } from "react";
import Router from "./config/router/Router";
import { useAppDispatch } from "./store";
import { fetchAllPeople } from "./store/people/peopleSlice";

const App = () => {
  const dispatch = useAppDispatch();

  // Moved this here from Films Page, since API response takes very long time.
  useEffect(() => {
    dispatch(fetchAllPeople());
  }, []);

  return <Router />;
};
export default App;
