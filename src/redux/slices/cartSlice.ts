import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartItem = {
	id: string;
	size: string;
	color: string;
	price: number;
	totalPrice: number;
	amount: number;
	img: string;
	name: string;
	text: string;
};

type cartState = {
	cart: cartItem[];
	amount: number;
	totalAmount: number;
	totalPrice: number;
};

const initialState: cartState = {
	cart: [],
	amount: 0,
	totalAmount: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<cartItem>) => {
			const productId = action.payload;
			try {
				const exist = state.cart.find(
					(product) =>
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
				);
				if (exist) {
					exist.amount++;
					exist.totalPrice += productId.price;
					state.totalAmount++;
					state.totalPrice += productId.price;
				} else {
					state.cart.push({
						id: productId.id,
						price: productId.price,
						size: productId.size,
						amount: 1,
						totalPrice: productId.price,
						name: productId.name,
						color: productId.color,
						img: productId.img,
						text: productId.text,
					});
					state.totalAmount++;
					state.totalPrice += productId.price;
				}
			} catch (error) {
				console.error(error);
			}
		},
		removeFromCart: (state, action: PayloadAction<cartItem>) => {
			const productId = action.payload;
			try {
				const exist = state.cart.find(
					(product) =>
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
				);
				if (exist?.amount === 1) {
					state.cart = state.cart.filter(
						(prod) =>
							prod.id !== productId.id ||
							prod.size !== productId.size ||
							prod.color !== productId.color
					);
					state.totalAmount--;
					state.totalPrice -= productId.price;
				} else if (exist) {
					exist.amount--;
					exist.totalPrice -= productId.price;
					state.totalAmount--;
					state.totalPrice -= productId.price;
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
