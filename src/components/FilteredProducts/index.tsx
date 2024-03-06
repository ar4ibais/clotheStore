import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import ProductCard from "../ProductCard";
import Navbar from "../Navbar";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from "@material-tailwind/react";

import Error from "../Error";
import {
	filterBySize,
	filterGender,
	filterProducts,
	sortByColor,
	sortByPrice,
} from "../../redux/slices/productsSlice";

const FilteredProducts = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state) => state.products.filteredProducts);
	const errorFilter = useAppSelector((state) => state.products.error);
	const { type } = useParams();

	const genderButtons = ["male", "female"];
	const colorButtons = [
		"red",
		"green",
		"purple",
		"yelloy",
		"orange",
		"blue",
		"black",
		"brown",
	];
	const sizeButtons = ["S", "M", "L", "XL"];
	return (
		<>
			<Navbar />
			<div className="pt-16">
				<div className="pl-14">
					<h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
						{type}
					</h1>
					<div className="flex items-center justify-between py-8">
						<div className="flex items-center">
							{genderButtons.map((item, index) => {
								return (
									<div key={index}>
										<Button
											onClick={() =>
												dispatch(filterGender(item))
											}
											color="gray"
											size="lg"
											variant="outlined"
											ripple
											className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">
											{item}
										</Button>
									</div>
								);
							})}
							<Button
								onClick={() => dispatch(sortByPrice())}
								color="gray"
								size="lg"
								variant="outlined"
								ripple
								className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">
								High Price
							</Button>
							<Menu>
								<MenuHandler>
									<Button
										color="gray"
										size="lg"
										variant="outlined"
										ripple
										className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">
										Select a color
									</Button>
								</MenuHandler>
								<MenuList>
									{colorButtons.map((item, index) => {
										return (
											<MenuItem
												onClick={() =>
													dispatch(sortByColor(item))
												}
												style={{ color: item }}
												key={index}>
												{item}
											</MenuItem>
										);
									})}
								</MenuList>
							</Menu>
							{type !== "Bags" && (
								<Menu>
									<MenuHandler>
										<Button
											color="gray"
											size="lg"
											variant="outlined"
											ripple
											className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">
											Select a size
										</Button>
									</MenuHandler>
									<MenuList>
										{sizeButtons.map((item, index) => {
											return (
												<MenuItem
													onClick={() =>
														dispatch(
															filterBySize(item)
														)
													}
													key={index}>
													{item}
												</MenuItem>
											);
										})}
									</MenuList>
								</Menu>
							)}
						</div>
						<div className="pr-14">
							<Button
								onClick={() => dispatch(filterProducts(type))}
								color="gray"
								size="lg"
								variant="outlined"
								ripple
								className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4">
								Clear Filters
							</Button>
						</div>
					</div>
				</div>
			</div>
			{errorFilter ? (
				<Error />
			) : (
				<div className="grid grid-cols-4 justify-items-center py-8 gap-12 px-[15px]">
					{products
						.filter((product) => product.type === type)
						.map((product) => (
							<ProductCard key={product.id} {...product} />
						))}
				</div>
			)}
		</>
	);
};

export default FilteredProducts;
