import { Alert } from "@material-tailwind/react";

const Error = () => {
	return (
		<div className="grid grid-cols-1 items-center justify-items-center">
			<div className="w-[96]">
				<Alert className="text-xl font-inter font-bold" color="red">
					Sorry, no product match with your filter 😔 Clear Filter and
					try again
				</Alert>
			</div>
		</div>
	);
};

export default Error;
