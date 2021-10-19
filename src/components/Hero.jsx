import React from "react";

// IMPORT IMAGES
import hero from "../assets/hero.jpg";

const Hero = () => {
	return (
		<div className="hero_container">
			{/* <img className="w-100 h-100 mt-5" src={hero} alt="" /> */}
			<div className="page_container text_content w-100">
				<div className="container-fluid">
					<div className="text-center d-flex flex-column justify-content-center align-items-center">
						<h1 className="color1 head">Are you ready to play?</h1>
						<p className="text-white">
							Select your NFT you want to play with in Squid Game
						</p>
						<button className="themeBtn">Go to Solanart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
