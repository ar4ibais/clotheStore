import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";
import { act } from "react-dom/test-utils";

export interface SliderState {
	value: number;
	length: number;
}

const initialState: SliderState = {
	value: 0,
	length: sliderData.length,
};

export const sliderSlice = createSlice({
	name: "slider",
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<number>) => {
			state.value =
				action.payload > state.length - 1 ? 0 : action.payload;
		},
		prevSlide: (state, action: PayloadAction<number>) => {
			state.value =
				action.payload < 0 ? state.length - 1 : action.payload;
		},
		dotSlide: (state, action: PayloadAction<number>) => {
			const slide = action.payload;
			state.value = slide;
		},
	},
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
