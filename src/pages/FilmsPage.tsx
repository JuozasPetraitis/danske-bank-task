import { useEffect } from "react";
import Slider from "../components/Slider/Slider";
import PeopleTable from "../components/PeopleTable/PeopleTable";

const FilmsPage = () => {
  useEffect(() => {
    // * I left this commented because API response time negatively affects UX (long resposne time)
    // return () => {
    //   dispatch({ type: "clearPeopleStateStore" });
    // };
  }, []);

  return (
    <div className="w-full place-self-start overflow-hidden">
      <Slider />
      <PeopleTable />
    </div>
  );
};

export default FilmsPage;
