import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import FilteredProducts from "./components/FilteredProducts";
import { SingleProduct } from "./components/SingleProduct";
import Login from "./components/Login";
import { useAppSelector } from "./redux/store";

function App() {
	const user = useAppSelector((state) => state.user.user);
	const { authUser } = user;
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={authUser ? <Main /> : <Login />} />
					<Route
						path="/filteredProducts/:type"
						element={<FilteredProducts />}
					/>
					<Route
						path="/filteredProducts/:type/:id"
						element={<SingleProduct />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
