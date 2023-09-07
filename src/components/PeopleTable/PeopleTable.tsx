import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../store";
import { StarWarPerson } from "../../config/interface/person";
import Loader from "../Loader/Loader";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/solid";
import { Button, Title } from "../../common";
import { useSelector } from "react-redux";
import { peopleState } from "../../store/people/peopleSlice";
import { filmState } from "../../store/film/filmSlice";

type PersonProperty = "Name" | "Birth Year" | "Gender" | "Mass";

const PeopleTable: React.FC = () => {
  const { people, loading: isPeopleLoading } = useSelector(peopleState);
  const {
    film: { film },
    film: { loading: isFilmLoading },
    films: { loading: isFilmsLoading },
  } = useSelector(filmState);
  const [currentPage, setCurrentPage] = useState(1);

  useMemo(() => {
    setCurrentPage(1);
  }, [film]);

  const peopleIdsFromMovieArray = film?.characters.map((url) => {
    const segments = url.split("/");
    return parseInt(segments[segments.length - 2], 10);
  });

  const filteredPeople = people.filter(
    (index) => peopleIdsFromMovieArray?.includes(index.id),
  );

  const pageSize = 10;
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = filteredPeople.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredPeople.length / pageSize);

  const personProperties: PersonProperty[] = [
    "Name",
    "Birth Year",
    "Gender",
    "Mass",
  ];

  const getStarWarPersonProperty = (
    person: StarWarPerson,
    property: PersonProperty,
  ) => {
    switch (property) {
      case "Name":
        return person.name;

      case "Birth Year":
        return person.birth_year;

      case "Gender":
        return person.gender;

      case "Mass":
        return `${person.mass} kg`;

      default:
        break;
    }
  };

  const renderTableHeaders = (property: PersonProperty, index: number) => (
    <th
      key={index}
      className="bg-gray-100 py-3 pl-2 text-left text-lg uppercase tracking-wide text-zinc-600/80"
    >
      {property}
    </th>
  );

  const renderPersonRow = (person: StarWarPerson, index: number) => (
    <tr
      key={index}
      className="flex flex-col gap-2 px-2 py-3 odd:bg-teal-800/20 md:grid md:grid-cols-[repeat(4,_1fr)]"
    >
      {personProperties.map((property, i) => (
        <td key={i} className="whitespace-no-wrap flex justify-between">
          <span className="text-lg font-bold md:hidden">{property}</span>
          {getStarWarPersonProperty(person, property)}
        </td>
      ))}
    </tr>
  );

  return (
    <div>
      {isFilmLoading && <Loader />}

      {!isFilmsLoading && !isFilmLoading && !film && (
        <Title size="xs" className="font-bold">
          Click show people to get started
        </Title>
      )}

      {!isPeopleLoading && !isFilmLoading && film && (
        <div className="flex flex-col gap-8 px-4 py-8">
          <table
            className="flex min-w-full flex-col border border-gray-400"
            data-testid="people-table-container"
          >
            <caption>People in {film.title} movie</caption>

            <thead className="hidden md:table-header-group">
              <tr className="grid grid-cols-[repeat(4,_1fr)]">
                {personProperties.map(renderTableHeaders)}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-400 bg-white md:table-row-group">
              {currentItems.map(renderPersonRow)}
            </tbody>
          </table>

          <div className="flex flex-col items-center gap-4 self-end">
            <p className="text-xl font-semibold">Current Page: {currentPage}</p>

            <div className="flex gap-4">
              <Button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage === 1}
                className={`${currentPage !== 1 && "hover:bg-blue-400"}  ${
                  currentPage === 1 &&
                  "bg-red-400/80 text-white/90 hover:bg-red-600"
                }`}
              >
                {currentPage === 1 ? (
                  <NoSymbolIcon className="h-8 w-8 text-white" />
                ) : (
                  <ArrowLongLeftIcon className="h-8 w-8" />
                )}
              </Button>

              <Button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                disabled={currentPage === totalPages}
                className={`${
                  currentPage !== totalPages && "hover:bg-blue-400"
                } ${
                  currentPage === totalPages &&
                  "bg-red-400/80 text-white/90 hover:bg-red-600"
                }`}
              >
                {currentPage === totalPages ? (
                  <NoSymbolIcon className="h-8 w-8 text-white" />
                ) : (
                  <ArrowLongRightIcon className="h-8 w-8" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleTable;
