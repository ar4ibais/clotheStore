import { createSlice } from "@reduxjs/toolkit";

const data = sessionStorage.getItem("authUser");

const initialState = {
	user: (data && JSON.parse(data)) || {
		name: "",
		password: "",
		image: "",
		authUser: false,
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			const userId = action.payload;
			const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
			const passwordValidation =
				/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(
					userId.password
				);
			state.user = userId;
			if (!userValidation || !passwordValidation) {
				state.user.authUser = false;
				console.log(userValidation, passwordValidation);
			} else {
				state.user.authUser = true;
				const saveState = JSON.stringify(userId);
				sessionStorage.setItem("authUser", saveState);
			}
		},
		logout: (state) => {
			state.user = {
				name: "",
				password: "",
				image: "",
				authUser: false,
			};
			sessionStorage.clear();
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
