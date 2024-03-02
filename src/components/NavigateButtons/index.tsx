import { Button } from "@material-tailwind/react";

import clothes from "../../assets/images/clothes.jpg";
import { useAppDispatch } from "../../redux/store";
import { filterProducts } from "../../redux/slices/productsSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
	const dispatch = useAppDispatch();
	const buttons = [
		"Hoodies",
		"Dresses",
		"Suits",
		"Shoes",
		"T-Shirts",
		"Jeans",
		"Jackets",
		"Bags",
	];
	return (
		<>
			<div className="flex items-center justify-center py-8">
				{buttons.map((button, index) => {
					return (
						<div key={index} className="mr-4">
							<Link to={`/filteredProducts/${button}`}>
								<Button
									color="black"
									size="lg"
									variant="outlined"
									ripple={true}
									className="hover:bg-gray-300 duration-500 ease-in-out"
									onClick={() =>
										dispatch(filterProducts(button))
									}>
									{button}
								</Button>
							</Link>
						</div>
					);
				})}
			</div>
			<div className="bg-black p-2 w-[55%] mx-auto rounded-md">
				<h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
					SALES UP TO 50%
				</h3>
			</div>
			<div className="flex justify-center items-center py-4">
				<img
					className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
					src={clothes}
					alt="clothes"
				/>
			</div>
		</>
	);
};

export default NavigateButtons;
