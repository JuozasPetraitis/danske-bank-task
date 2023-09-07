import { Button, Title } from "../../common";
import { StarWarFilm } from "../../config/interface/film";
import { useAppDispatch } from "../../store";
import { fetchFilmById } from "../../store/film/filmSlice";

interface FilmCardProps {
  film: StarWarFilm;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }: FilmCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex transform cursor-default flex-col justify-center gap-4 rounded-md bg-teal-800/80 px-4 transition duration-300 ease-in-out hover:scale-105 hover:bg-teal-900 hover:bg-opacity-90">
      <Title
        size="xs"
        align="left"
        data-testid="film-title-paragraph"
        className="text-white"
      >
        {film.title}
      </Title>

      <p className="text-sm text-gray-300">Release Date: {film.release_date}</p>
      <p className="text-sm text-gray-300">Episode ID: {film.episode_id}</p>

      <Button
        onClick={() => {
          dispatch(fetchFilmById(film.id));
        }}
        className="self-start duration-500"
        color="outlined"
      >
        Show people
      </Button>
    </div>
  );
};

export default FilmCard;
