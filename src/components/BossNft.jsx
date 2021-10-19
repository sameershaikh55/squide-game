import React from "react";

// IMPORT IMAGES
import Team from "../assets/nft/Team-2.png";

const BossNft = () => {
	return (
		<div className="boss_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="f28 color1">BOSS NFT WINNER</h1>
								<p className="text-white">The person who won the draw for</p>
							</div>

							<div className="inner_nft_winner mt-5">
								<img className="w-100" src={Team} alt="" />
								<div className="text-center">
									<h1 className="color3 fw600">BOSS NFT</h1>
									<p className="text-white f28">Data not updated</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BossNft;
