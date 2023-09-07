import React, { useEffect, useRef, useState } from "react";
import { fetchAllFilms } from "../../store/film/filmSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import { StarWarFilm } from "../../config/interface/film";
import FilmCard from "../FilmCard/FilmCard";

const Slider = () => {
  const { films, loading: isFilmsLoading } = useAppSelector(
    (state) => state.film.films,
  );
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (films.length <= 0) {
      (async () => {
        await dispatch(fetchAllFilms());
      })();
    }

    return () => {
      dispatch({ type: "clearFilmStateStore" });
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHovered]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (container) {
      if (e.deltaY === 100) {
        container.scrollBy({ left: 100 });
      } else {
        container.scrollBy({ left: -100 });
      }
    }
  };

  return (
    <div
      className={`hover:hide-y-scroll grid auto-cols-[16rem] grid-flow-col grid-rows-[14rem] gap-4 overflow-x-auto p-4 custom-scrollbar md:auto-cols-[20rem] ${
        isFilmsLoading ? "items-center justify-center" : ""
      }`}
      onWheel={handleWheel}
      ref={containerRef}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      data-testid="slider-container"
    >
      {isFilmsLoading && <Loader />}

      {!isFilmsLoading &&
        !!films.length &&
        films.map((film: StarWarFilm, index: number) => (
          <FilmCard key={index} film={film} />
        ))}
    </div>
  );
};

export default Slider;
