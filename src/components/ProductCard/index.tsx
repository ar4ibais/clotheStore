import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";
import { Product, singleProduct } from "../../redux/slices/productsSlice";
import { useAppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, name, text, type, color, price }: Product) => {
	const dispatch = useAppDispatch();
	return (
		<Link to={`/filteredProducts/${type}/${id}`}>
			<Card
				className="mt-6 w-96"
				onClick={() => dispatch(singleProduct(id))}
				placeholder={undefined}>
				<CardHeader
					color="blue-gray"
					className="relative h-96"
					placeholder={undefined}>
					<img className="h-full w-full" src={img} alt="card-image" />
				</CardHeader>
				<CardBody placeholder={undefined} className="text-center">
					<Typography
						placeholder={undefined}
						variant="h5"
						color="blue-gray"
						className="mb-2">
						{name}
					</Typography>
					<Typography placeholder={undefined}>{text}</Typography>
				</CardBody>
				<CardFooter
					placeholder={undefined}
					divider
					className="flex items-center justify-between py-3">
					<Typography placeholder={undefined} variant="small">
						{price}$
					</Typography>
					<Typography
						placeholder={undefined}
						variant="small"
						color="white"
						className="flex gap-1">
						{color.map((color, index) => {
							return (
								<i
									key={index}
									className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
									style={{ backgroundColor: color }}></i>
							);
						})}
					</Typography>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
