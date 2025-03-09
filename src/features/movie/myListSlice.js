import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myList: [],
};

const myListSlice = createSlice({
  name: "myList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const movie = action.payload;
      if (!state.myList.find((item) => item.title === movie.title)) {
        state.myList.push(movie);
      }
    },
    removeFromList: (state, action) => {
      state.myList = state.myList.filter(
        (item) => item.title !== action.payload
      );
    },
  },
});

export const { addToList, removeFromList } = myListSlice.actions;
export default myListSlice.reducer;
