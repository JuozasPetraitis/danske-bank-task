import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import axios from "axios";
import { StarWarFilm } from "../../config/interface/film";
import { SWAPI_API_URL } from "../../config/constants/constants";

export const fetchAllFilmsAction = createAction("film/fetchAllFilms");

export const fetchAllFilms = createAsyncThunk<StarWarFilm[]>(
  "film/fetchAllFilms",
  async () => {
    try {
      const response = await axios.get(SWAPI_API_URL.FILMS);
      return response.data.results as StarWarFilm[];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const fetchFilmById = createAsyncThunk(
  "film/fetchFilmById",
  async (id: number) => {
    try {
      const response = await axios.get(`${SWAPI_API_URL.FILMS}${id}`);
      return response.data as StarWarFilm;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

interface FilmSliceState {
  films: {
    loading: boolean;
    films: StarWarFilm[];
    error: null | string | undefined;
  };
  film: {
    loading: boolean;
    film: StarWarFilm | null;
    error: null | string | undefined;
  };
}

const initialState: FilmSliceState = {
  films: {
    loading: false,
    films: [] as StarWarFilm[],
    error: null,
  },
  film: {
    loading: false,
    film: null,
    error: null,
  },
};

const filmSlice = createSlice({
  name: "film",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilms.pending, (state, action) => {
        state.films.loading = true;
      })
      .addCase(fetchAllFilms.fulfilled, (state, action) => {
        state.films.loading = false;

        state.films.films = action.payload.map((item) => ({
          ...item,
          id: parseInt(item.url.match(/\d+/)?.[0] ?? "0", 10),
        }));
      })
      .addCase(fetchAllFilms.rejected, (state, action) => {
        state.films.loading = false;
        state.films.error = action.error.message;
      })
      .addCase(fetchFilmById.pending, (state, action) => {
        state.film.loading = true;
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.film.loading = false;
        state.film.film = action.payload;
      })
      .addCase(fetchFilmById.rejected, (state, action) => {
        state.film.loading = false;
        state.film.error = action.error.message;
      })
      .addCase("clearFilmStateStore", (state, action) => {
        return { ...initialState };
      });
  },
});

export default filmSlice.reducer;
export const filmState = (state: RootState) => state.film;
