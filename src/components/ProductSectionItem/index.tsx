import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
	Button,
} from "@material-tailwind/react";
import { useAppDispatch } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartSlice";

type ProdProps = {
	id: string;
	img: string;
	name: string;
	text: string;
	size: string[];
	color: string[];
	price: number;
};
const ProductSectionItem = (props: ProdProps) => {
	const { id, img, name, text, size, color, price } = props;
	const dispatch = useAppDispatch();
	const defaultSize = size[0],
		defaultColor = color[0];
	return (
		<Card className="w-96" placeholder={undefined}>
			<CardHeader
				floated={false}
				className="h-96"
				placeholder={undefined}>
				<img src={img} alt={name} />
			</CardHeader>
			<CardBody className="text-center" placeholder={undefined}>
				<Typography
					variant="h4"
					color="blue-gray"
					className="mb-2"
					placeholder={undefined}>
					{name}
				</Typography>
				<Typography
					color="blue-gray"
					className="font-medium"
					textGradient
					placeholder={undefined}>
					{text}
				</Typography>

				<div className="flex justify-between items-center pt-4">
					<Typography
						color="blue-gray"
						className="font-medium"
						textGradient
						placeholder={undefined}>
						Size left: {defaultSize}
					</Typography>
					<Typography
						color="blue-gray"
						className="font-medium"
						textGradient
						placeholder={undefined}>
						Color left:{" "}
						<span
							className="px-2 rounded-full ml-2"
							style={{ backgroundColor: defaultColor }}></span>
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="flex gap-7 pt-2" placeholder={undefined}>
				<Tooltip content="Add to Cart" placement="bottom">
					<Button
						onClick={() =>
							dispatch(
								addToCart({
									...props,
									color: defaultColor,
									size: defaultSize,
									amount: 1,
									id,
									price,
									totalPrice: price,
								})
							)
						}
						ripple
						size="lg"
						color="green"
						variant="outlined"
						placeholder={undefined}>
						Add
					</Button>
				</Tooltip>
			</CardFooter>
		</Card>
	);
};

export default ProductSectionItem;
