import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { login } from "../../redux/slices/authSlice";

const Login = () => {
	const dispatch = useAppDispatch();

	const initialState = {
		name: "",
		password: "",
		image: "",
	};
	const [values, setValues] = useState(initialState);

	const onChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return (
		<div className="grid grid-cols-1 items-center justify-items-center h-screen">
			<Card className="w-96" placeholder={undefined}>
				<CardHeader
					placeholder={undefined}
					variant="gradient"
					color="gray"
					className="mb-4 grid h-28 place-items-center">
					<Typography
						placeholder={undefined}
						variant="h3"
						color="white">
						Sign In
					</Typography>
				</CardHeader>
				<CardBody
					placeholder={undefined}
					className="flex flex-col gap-4">
					<Input
						crossOrigin={undefined}
						label="Name"
						size="lg"
						type="text"
						name="name"
						value={values.name}
						onChange={onChange}
					/>
					<Input
						label="Password"
						size="lg"
						type="password"
						name="password"
						value={values.password}
						onChange={onChange}
						crossOrigin={undefined}
					/>
					<Input
						crossOrigin={undefined}
						label="Image URL address"
						size="lg"
						type="text"
						name="image"
						value={values.image}
						onChange={onChange}
					/>
				</CardBody>
				<CardFooter className="pt-0" placeholder={undefined}>
					<Button
						placeholder={undefined}
						variant="gradient"
						fullWidth
						onClick={() => dispatch(login(values))}>
						Sign In
					</Button>
					<Typography
						placeholder={undefined}
						variant="small"
						className="mt-6 flex justify-center">
						Image is Optional
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
