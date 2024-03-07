/* eslint-disable no-mixed-spaces-and-tabs */
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
	error: boolean;
};

const filterData = sessionStorage.getItem("filteredData");
const oneProdData = sessionStorage.getItem("oneProduct");

const initialState: productState = {
	filteredProducts: (filterData && JSON.parse(filterData)) || [],
	singleProduct: (oneProdData && JSON.parse(oneProdData)) || [],
	error: false,
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
				state.error = false;
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
		filterGender: (state, action: PayloadAction<string>) => {
			try {
				const gender = state.filteredProducts.filter(
					(prod) => prod.gender === action.payload
				);
				state.error = false;
				state.filteredProducts = gender;
				const oneGenderType = gender.length > 0;
				if (oneGenderType) {
					state.error = false;
					const saveState = JSON.stringify(gender);
					sessionStorage.setItem("filteredData", saveState);
				} else {
					state.error = true;
					state.filteredProducts = [];
				}
			} catch (error) {
				console.error(error);
			}
		},
		sortByPrice: (state) => {
			try {
				const price = state.filteredProducts.sort((a, b) => {
					return a.price > b.price ? -1 : 1;
				});
				state.filteredProducts = price;
				const count = price.length;
				if (count > 1) {
					const noError = false;
					state.error = noError;
					if (!noError) {
						state.filteredProducts = price;
						const saveState = JSON.stringify(price);
						sessionStorage.setItem("filteredData", saveState);
					} else {
						state.error = true;
						state.filteredProducts = [];
					}
				}
			} catch (error) {
				console.error(error);
			}
		},
		sortByColor: (state, action: PayloadAction<string>) => {
			try {
				const color = state.filteredProducts.filter((prod) =>
					prod.color.includes(action.payload)
				);
				state.error = false;
				state.filteredProducts = color;
				if (color.length <= 0) {
					state.error = true;
					state.filteredProducts = [];
				} else {
					state.error = false;
					state.filteredProducts = color;
					const saveState = JSON.stringify(color);
					sessionStorage.setItem("filteredData", saveState);
				}
			} catch (error) {
				console.error(error);
			}
		},
		filterBySize: (state, action: PayloadAction<string>) => {
			try {
				const size = state.filteredProducts.filter(
					(prod) => prod.size && prod.size.includes(action.payload)
				);
				state.error = false;
				state.filteredProducts = size;
				if (size.length <= 0) {
					state.error = true;
					state.filteredProducts = [];
				} else {
					state.error = false;
					state.filteredProducts = size;
					const saveState = JSON.stringify(size);
					sessionStorage.setItem("filteredData", saveState);
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const {
	filterProducts,
	singleProduct,
	filterGender,
	sortByPrice,
	sortByColor,
	filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
