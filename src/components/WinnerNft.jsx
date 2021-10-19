import React from "react";

// IMPORTING IMAGES
import Team from "../assets/nft/Team-1.png";
import Team2 from "../assets/nft/Team-2.png";
import Team3 from "../assets/nft/Team-3.png";

const WinnerNft = () => {
	// DATA
	const data = [
		{
			i: Team,
		},
		{
			i: Team2,
		},
		{
			i: Team3,
		},
		{
			i: Team,
		},
		{
			i: Team2,
		},
		{
			i: Team3,
		},
	];

	return (
		<div className="nft_winner_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="text-center">
						<h1 className="f28 color1">NFT VIP GIFT WINNERS</h1>
						<p className="text-white">
							People who have met the requirements to win the VIP NFTs are
						</p>
					</div>

					<div className="inner_nft_winner mt-5">
						<div className="row gy-4">
							{data.map((prev, i) => {
								return (
									<div key={i} className="col-4">
										<img src={prev.i} alt="" />
										<div className="text-center">
											<h4 className="color3 fw600 f22">VIP BEAR</h4>
											<p className="text-white f14">Data not updated</p>
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

export default WinnerNft;
