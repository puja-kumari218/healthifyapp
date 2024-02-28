import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import  "./Register.scss";

const Register = () => {

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const url = "https://healthify-app-backend.onrender.com/api/users";
			const { data: res } = await axios.post(url, data);

			Swal.fire({
				title: `User Created Sucessfully!`,
				icon: 'success',
				showCloseButton: true
		    });

			setTimeout(() => {
				navigate("/login");
			}, 0);


			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				
				Swal.fire({
					title: `<strong>${error.response.data.message}</strong>`,
					icon: 'error',
					showCloseButton: true
				});
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="white_btn">
							Sign in
						</button>
					</Link>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;