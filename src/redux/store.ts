import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import sliderReducer from "./slices/sliderSlice";

const store = configureStore({
	devTools: true,
	reducer: {
		slider: sliderReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
