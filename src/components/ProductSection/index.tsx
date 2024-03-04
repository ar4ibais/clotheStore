import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "../ProductSectionItem";

const ProductSection = () => {
	return (
		<>
			<div className="bg-black p-2 w-[50%] mx-auto rounded-md">
				<h2 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
					SUMMER T-SHIRTS SALE 30%
				</h2>
			</div>
			<div className="grid grid-cols-3 justify-center py-8 gap-4 mx-auto max-w-7xl">
				{storeData.slice(0, 6).map((item) => {
					return (
						<div key={item.id}>
							<ProductSectionItem {...item} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProductSection;
