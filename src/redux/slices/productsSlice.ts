import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export type Product = {
	id: string;
	img: string;
	name: string;
	text: string;
	type: string;
	size?: string[];
	color: string[];
	gender: string;
	price: number;
};

type productState = {
	filteredProducts: Product[];
};

const initialState: productState = {
	filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || [],
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		filterProducts: (state, action: PayloadAction<string>) => {
			try {
				const filter = storeData.filter(
					(product) => product.type === action.payload
				);
				state.filteredProducts = filter;
				const saveState = JSON.stringify(filter);
				sessionStorage.setItem("filteredData", saveState);
			} catch (err) {
				console.error(err);
			}
		},
	},
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
