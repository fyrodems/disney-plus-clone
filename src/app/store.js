import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import userReducer from "../features/user/userSlice";
import myListReducer from "../features/movie/myListSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    myList: myListReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
