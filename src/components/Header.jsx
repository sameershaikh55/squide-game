import React, { useEffect } from "react";

// IMPORT ICONS
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// IMPORT IMAGES
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

// IMPORT REACT SCROLL
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
			}
		});
	}, []);
	return (
		<div className="header_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex w-100 justify-content-between align-items-center">
								<div className="logo_cont">
									<NavLink to="/">
										<img className="w-100" src={logo} alt="" />
									</NavLink>
								</div>
								<div className="d-block d-md-none">
									<img src={hamburger} alt="" />
								</div>
								<ul className="list-unstyled d-none d-md-flex mb-0">
									<li>
										<Link className="f18 text-decoration-none pointer" to="">
											About
										</Link>
									</li>
									<li className="ms-4 ps-2">
										<Link className="f18 text-decoration-none pointer" to="">
											Roadmap
										</Link>
									</li>
									<li className="ms-4 ps-2">
										<Link className="f18 text-decoration-none pointer" to="">
											Our Team
										</Link>
									</li>
									<li className="ms-4 ps-2">
										<NavLink
											className="f18 text-decoration-none pointer"
											to="/winner"
										>
											Winners
										</NavLink>
									</li>
									<li className="ms-4 ps-2">
										<a href="">
											<FaDiscord fontSize="1.8rem" />
										</a>
									</li>
									<li className="ms-4 ps-2">
										<a href="">
											<BsInstagram fontSize="1.6rem" />
										</a>
									</li>
									<li className="ms-4 ps-2">
										<a href="">
											<FaTwitter fontSize="1.6rem" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
