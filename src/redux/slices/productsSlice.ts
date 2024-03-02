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
	singleProduct: Product;
};

const initialState: productState = {
	filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || [],
	singleProduct: JSON.parse(sessionStorage.getItem("oneProduct")) || [],
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
		singleProduct: (state, action: PayloadAction<string>) => {
			try {
				const oneProduct = storeData.filter(
					(product) => product.id === action.payload
				);
				state.singleProduct = oneProduct[0];
				const saveState = JSON.stringify(oneProduct[0]);
				sessionStorage.setItem("oneProduct", saveState);
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
