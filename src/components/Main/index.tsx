import Footer from "../Footer";
import Navbar from "../Navbar";
import NavigateButtons from "../NavigateButtons";
import ProductSection from "../ProductSection";
import Slider from "../Slider";

const Main = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<NavigateButtons />
			<ProductSection />
			<Footer />
		</>
	);
};

export default Main;
