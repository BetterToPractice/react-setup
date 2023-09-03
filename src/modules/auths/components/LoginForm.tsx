import { Box, Button } from "@customs/components";
import {toast} from "react-toastify";

const LoginForm = () => {
	const doLogin = () => {
		toast.success("Login Success!");
	}

	return (
		<div>
			<Box>
				<input type="text"/><br />
				<input type="text"/><br />
				<Button label="Login" onClick={doLogin} />
			</Box>
		</div>
	)
}

export { LoginForm }
