import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import ProductCard from "../ProductCard";
import { Navbar } from "@material-tailwind/react";

const FilteredProducts = () => {
	const products = useAppSelector((state) => state.products.filteredProducts);
	const { type } = useParams();
	return (
		<>
			<Navbar />
			<div className="pt-16">
				<div className="pl-14">
					<h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
						{type}
					</h1>
				</div>
			</div>
			<div className="grid grid-cols-4 justify-items-center py-8 gap-12 px-[15px]">
				{products
					.filter((product) => product.type === type)
					.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
			</div>
		</>
	);
};

export default FilteredProducts;
