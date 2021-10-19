import React from "react";

// IMPORTING COMPONENTS
import Footer from "../../components/Footer";

// IMPORTING LOGO
import logo from "../../assets/logo.svg";

const Login = () => {
	return (
		<>
			<div className="login_container">
				<div className="container-fluid">
					<div className="form_container">
						<div className="row">
							<div className="col-8 mx-auto">
								<img className="w-100" src={logo} alt="" />
							</div>
						</div>
						<p className="text-white mt-3 mb-4">
							Access to the boss's operating room
						</p>
						<form className="d-flex flex-column">
							<input placeholder="login" type="text" name="" id="" />
							<input
								placeholder="Password"
								className="mt-3"
								type="text"
								name=""
								id=""
							/>
							<button className="mt-3">Login</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
