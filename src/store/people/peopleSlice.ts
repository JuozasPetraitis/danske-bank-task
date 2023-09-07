import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import axios from "axios";
import { StarWarPerson } from "../../config/interface/person";
import { SWAPI_API_URL } from "../../config/constants/constants";

export const fetchAllPeoplesAction = createAction("people/fetchAllpeoples");

export const fetchAllPeople = createAsyncThunk(
  "people/fetchAllpeoples",
  async () => {
    let allPeople = [] as StarWarPerson[];
    let nextUrl = SWAPI_API_URL.PEOPLE;
    try {
      while (nextUrl) {
        const response = await axios.get(nextUrl);
        const results = response.data.results as StarWarPerson[];
        const next = response.data.next as string;
        allPeople = allPeople.concat(results);
        nextUrl = next;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }

    return allPeople;
  },
);

interface peopleSliceState {
  loading: boolean;
  people: StarWarPerson[];
  error: null | string | undefined;
}

const initialState: peopleSliceState = {
  loading: false,
  people: [] as StarWarPerson[],
  error: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPeople.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload.map((item: StarWarPerson) => ({
          ...item,
          id: parseInt(item.url.match(/\d+/)?.[0] ?? "0", 10),
        }));
      })
      .addCase(fetchAllPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase("clearPeopleStateStore", (state, action) => {
        return { ...initialState };
      });
  },
});

export default peopleSlice.reducer;

export const peopleState = (state: RootState) => state.people;
