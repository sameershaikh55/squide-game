import React from "react";

// IMPORTING IMAGES
import Team1 from "../assets/nft/Team-1.png";
import Team2 from "../assets/nft/Team-2.png";
import Team3 from "../assets/nft/Team-3.png";

const Team = () => {
	// DATA
	const data = [
		{
			i: Team1,
			t: "KenHP",
			p: "Technology Development",
		},
		{
			i: Team2,
			t: "XelShield",
			p: "3D Designer",
		},
		{
			i: Team3,
			t: "Name",
			p: "Web Development",
		},
	];

	return (
		<div className="team_container">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="head text-center color1">Get to know our team</h1>
					<p className="para text-center text-white">
						Our team consists of professionals with more than 10 years of
						experience in the fields of cryptocurrencies, marketing and 3D
						design.
					</p>
					<p className="para text-center text-white">
						Lovers of blockchain technology and fully committed to this
						collection, we are proud to give you the opportunity to have your
						NFT character from the squid game!
					</p>

					<div className="inner_team my-5">
						<div className="row">
							{data.map((prev, i) => {
								return (
									<div key={i} className="col-4">
										<img className="w-100" src={prev.i} alt="" />
										<div className="text-center">
											<h4 className="color1 f28 fw700">{prev.t}</h4>
											<p className="text-white f14">{prev.p}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
