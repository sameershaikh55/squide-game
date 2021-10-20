import React from "react";

// IMPORTING IMAGES
import Team1 from "../assets/nft/Team-2.png";
import Team2 from "../assets/nft/Team-3.png";
import front from "../assets/nft/front-man.png";

const Collection = () => {
	// DATA
	const data = [
		{
			i: Team2,
			t: "Soldiers",
			a: "536 NFT",
			p: "They are the ones in charge of enforcing the rules of the game.",
		},
		{
			i: Team1,
			t: "Players",
			a: "456 NFT",
			p: "These are the participants in the game.",
		},
		{
			i: front,
			t: "Front man",
			a: "1 NFT",
			p: "The one who controls the game.",
		},
		{
			i: Team1,
			t: "Vips",
			a: "6 NFT",
			p: "Guests who are invited to enjoy the game.",
		},
		{
			i: Team1,
			t: "Boss",
			a: "1 NFT",
			p: "The head of the game organisation.",
		},
	];

	return (
		<div className="collection_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="head text-center color1">Collection Squid Game</h1>
							<p className="para text-center text-white">
								The Collection Squid Game consists of collecting NFT of
								different types of characters, with which you can receive SOL
								which is the cryptocurrency of the next generation blockchain
								network Solana, as well as you can collect, sell and exchange
								your NFT to receive new NFT.
							</p>
							<br />
							<h5 className="para color1 fw600 text-center mb-2 mb-md-0">
								Types of NFT
							</h5>
							<br />

							<div className="nft_container">
								{data.map((prev, ind) => {
									const { i, p, t, a } = prev;
									return (
										<div key={ind} className="nft_card mt-4 mt-sm-0">
											<div className="img_cont">
												<img className="w-100" src={i} alt="" />
												<div class="overlay"></div>
												<h4 className="text-white f28 fw700">{t}</h4>
											</div>
											<div className="text-center">
												<p className="mt-2 mb-1 f18 color1">{a}</p>
												<p className="text-white f14">{p}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
