import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartItem = {
	id: string;
	size: string;
	color: string;
	price: number;
	totalPrice: number;
	amount: number;
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
					});
					state.totalAmount++;
					state.totalPrice += productId.price;
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;