import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import FilteredProducts from "./components/FilteredProducts";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/filteredProducts/:type"
						element={<FilteredProducts />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
