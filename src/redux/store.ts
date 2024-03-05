import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sliderReducer from "./slices/sliderSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
	devTools: true,
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
		cart: cartReducer,
		user: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
