import { useSelector } from "react-redux";
import { dotSlide, nextSlide, prevSlide } from "../../redux/slices/sliderSlice";
import { useAppDispatch } from "../../redux/store";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
	const dispatch = useAppDispatch();
	const slideIndex = useSelector((state) => state.slider.value);
	return (
		<div className="relative pb-4">
			<div>
				{sliderData.map((item, index) => {
					return (
						<div
							key={item.id}
							className={
								+item.id === slideIndex
									? "opacity-100 duration-500 ease-in-out scale-100"
									: "opacity-0 duration-500 ease-in-out scale-95"
							}>
							<div>
								{+item.id === slideIndex && (
									<img
										className="h-[850px] w-full"
										src={item.img}
										alt="shoes"
									/>
								)}
							</div>
							<div className="absolute top-32 mx-auto inset-x-1/4">
								<p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
									{+item.id === slideIndex && item.text}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex absolute bottom-20 left left-[50%] translate-x-[-50%]">
				{sliderData.map((dot, index) => {
					return (
						<div key={dot.id} className="mr-4">
							<div
								onClick={() => dispatch(dotSlide(index))}
								className={
									index === slideIndex
										? "bg-green-300 rounded-full p-4 cursor-pointer"
										: "bg-white rounded-full p-4 cursor-pointer"
								}></div>
						</div>
					);
				})}
			</div>
			<button
				className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
				onClick={() => dispatch(prevSlide(slideIndex - 1))}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#000"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
			<button
				className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
				onClick={() => dispatch(nextSlide(slideIndex + 1))}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#000"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Slider;
