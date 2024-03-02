import FilteredProducts from "../FilteredProducts";
import Navbar from "../Navbar";
import NavigateButtons from "../NavigateButtons";
import Slider from "../Slider";

const Main = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<NavigateButtons />
			<FilteredProducts />
		</>
	);
};

export default Main;
