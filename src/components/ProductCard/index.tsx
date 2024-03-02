import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";
import { Product, singleProduct } from "../../redux/slices/productsSlice";
import { useAppDispatch } from "../../redux/store";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({
	id,
	img,
	name,
	text,
	type,
	size,
	color,
	gender,
	price,
}: Product) => {
	const dispatch = useAppDispatch();
	return (
		<Link to={`/filteredProducts/${type}/${id}`}>
			<Card
				className="mt-6 w-96"
				onClick={() => dispatch(singleProduct(id))}>
				<CardHeader color="blue-gray" className="relative h-96">
					<img className="h-full w-full" src={img} alt="card-image" />
				</CardHeader>
				<CardBody className="text-center">
					<Typography variant="h5" color="blue-gray" className="mb-2">
						{name}
					</Typography>
					<Typography>{text}</Typography>
				</CardBody>
				<CardFooter
					divider
					className="flex items-center justify-between py-3">
					<Typography variant="small">{price}$</Typography>
					<Typography
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
