import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import logo from "/public/logo.png";
import { ADMIN_LOGIN } from "../graphql/queries/adminLogin.query";
import { login } from "../store/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { data, error } = useQuery(ADMIN_LOGIN, {
		variables: { email, password },
		skip: !email || !password,
	});

	const handleLogin = (values: { email: string; password: string }) => {
		setEmail(values.email);
		setPassword(values.password);
	};

	if (data) {
		console.log("Login successful:", data.login);
		const { token, user } = data.login;

		dispatch(login({ token, user }));

		navigate("/dashboard");
	}

	return (
		<div>
			<Form
				className="bg-white px-[90px] py-10 rounded-2xl"
				layout="vertical"
				onFinish={handleLogin}
			>
				<div className="flex items-center justify-center">
					<Link to="/" className="w-60 mx-auto mb-2">
						<img src={logo} alt="Logo" style={{ width: "200px" }} />
					</Link>
				</div>

				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: "Please enter your email!" },
						{ type: "email", message: "Please enter a valid email!" },
					]}
				>
					<Input placeholder="Enter your email" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please enter your password!" }]}
				>
					<Input.Password
						placeholder="Enter your password"
						iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
						suffix={
							<Button
								type="text"
								icon={passwordVisible ? <FaEyeSlash /> : <FaEye />}
								onClick={() => setPasswordVisible(!passwordVisible)}
								style={{ border: "none", boxShadow: "none" }}
							/>
						}
						type={passwordVisible ? "text" : "password"}
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{
							width: "100%",
							backgroundColor: "#50A1E4",
							borderColor: "#50A1E4",
						}}
					>
						Sign In
					</Button>
				</Form.Item>
				<p className="text-red-400 font-semibold text-end">
					{error && error.message}
				</p>
			</Form>
		</div>
	);
};

export default AdminLoginForm;
