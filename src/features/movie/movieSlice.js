import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recomended: null,
  newest: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,

  reducers: {
    setMovies: (state, action) => {
      state.recomended = action.payload.recomended;
      state.newest = action.payload.newest;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecomended = (state) => state.movie.recomended;
export const selectNewest = (state) => state.movie.newest;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
