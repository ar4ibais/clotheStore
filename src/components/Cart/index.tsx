import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { removeFromCart } from "../../redux/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
	const dispatch = useAppDispatch();
	const { cart, totalPrice } = useAppSelector((state) => state.cart);
	return (
		<div>
			<>
				{cart.length > 0 ? (
					<Dialog
						className="border-0 outline-0"
						open={openModal}
						handler={() => setOpen(false)}>
						<DialogHeader>Shopping Bag</DialogHeader>
						<DialogBody
							divider
							className="flex flex-col justify-center items-start">
							{cart.map((item, index) => {
								return (
									<div
										key={item.id}
										className="grid grid-cols-2 py-4">
										<div>
											<img
												className="h-[125px] rounded-md"
												src={item.img}
												alt={item.name}
											/>
											<div className="flex flex-col items-start">
												<h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
													{item.name}
												</h4>
											</div>
											<div className="max-w-xs">
												<p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
													{item.text}
												</p>
											</div>
										</div>
										<div className="">
											{item.size && (
												<p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
													Selected size:{" "}
													<span className="ml-2">
														{item.size}
													</span>
												</p>
											)}
											<p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
												Selected color:{" "}
												<span
													style={{
														backgroundColor:
															item.color,
													}}
													className="ml-2 rounded-full px-2"></span>
											</p>
											<p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
												Amount:{" "}
												<span className="ml-2">
													{item.amount}
												</span>
											</p>
											<p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
												Single Item price:{" "}
												<span className="ml-2">
													{item.price}$
												</span>
											</p>
											<p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
												Total Item price:{" "}
												<span className="ml-2">
													{item.totalPrice}$
												</span>
											</p>
											<div className="pt-4">
												<Tooltip
													content="Remove from the Cart"
													placement="bottom">
													<Button
														size="sm"
														color="red"
														ripple
														variant="filled"
														onClick={() =>
															dispatch(
																removeFromCart(
																	item
																)
															)
														}>
														Remove
													</Button>
												</Tooltip>
											</div>
										</div>
									</div>
								);
							})}
						</DialogBody>
						<DialogFooter className="flex justify-start items-center">
							<p className="text-black text-base font-inter tracking-normal leading-none pt-2">
								Total Price of All Products:{" "}
								<span className="ml-2">{totalPrice}$</span>
							</p>
						</DialogFooter>
					</Dialog>
				) : (
					<Dialog
						className="border-0 outline-0"
						open={openModal}
						handler={() => setOpen(false)}>
						<DialogHeader>Shopping Bag</DialogHeader>
						<DialogBody>
							<div>
								<h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
									Your Bag is empty
								</h1>
								<p className="text-black text-base font-inter tracking-normal leading-none">
									Add some products
								</p>
							</div>
						</DialogBody>
					</Dialog>
				)}
			</>
		</div>
	);
};

export default Cart;
