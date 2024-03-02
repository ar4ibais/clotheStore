import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../redux/slices/cartSlice";

export const SingleProduct = () => {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.products.singleProduct);
	const productSize = product.size ? product.size[0] : "";
	const [size, setSize] = useState(productSize);
	const [color, setColor] = useState(product.color[0]);
	return (
		<div className="flex justify-center items-center py-10">
			<div className="pl-44 grow-[2]">
				<img
					className="h-[850px] rounded-lg"
					src={product.img}
					alt="image"
				/>
			</div>
			<div className="grow-[3]">
				<div className="max-w-lg">
					<h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
						{product.name}
					</h5>
					<p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb4">
						15% OFF
					</p>
					<p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none">
						{product.text}
					</p>
					<div className="pb-4">
						{product.size && (
							<div>
								<label
									htmlFor="countries"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Pick a Size
								</label>
								<select
									id="size"
									name="size"
									value={size}
									onChange={(e) => setSize(e.target.value)}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									{product.size?.map((item, index) => {
										return (
											<option key={index} value={item}>
												{item}
											</option>
										);
									})}
								</select>
							</div>
						)}
					</div>
					<div className="pb-4">
						<label
							htmlFor="color"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Pick a Color
						</label>
						<select
							id="color"
							name="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
							{product.color.map((item, index) => {
								return (
									<option key={index} value={item}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					<Tooltip content="Add to Cart" placement="bottom">
						<Button
							color="gray"
							size="lg"
							variant="outlined"
							ripple={true}
							onClick={() =>
								dispatch(
									addToCart({
										id: product.id,
										size: size,
										color: color,
										price: product.price,
										totalPrice: product.price,
										amount: 1,
									})
								)
							}>
							Add to cart
						</Button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};
