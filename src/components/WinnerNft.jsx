import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Loader from "../components/Loader";

// IMPORTING IMAGES
import Team from "../assets/nft/Team-1.png";
import Team2 from "../assets/nft/Team-2.png";
import Team3 from "../assets/nft/Team-3.png";

// IMPORTING FIREBASE
import { db } from "../firebase/firebase";

const WinnerNft = () => {
	const [post, setPost] = useState([]);

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

	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db.collection("vipNft").onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				getPostsFromFirebase.push({
					...doc.data(), //spread operator
					key: doc.id, // `id` given to us by Firebase
				});
			});
			setPost(getPostsFromFirebase);
		});

		// return cleanup function
		return () => subscriber();
	}, [post]); // empty dependencies array => useEffect only called once
	
	return (
		<div className="nft_winner_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
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
											<div key={i} className="col-10 col-sm-6 col-md-4 mx-auto">
												<img className="w-100" src={prev.i} alt="" />
												<div className="text-center">
													<h4 className="color3 fw600 f22">VIP BEAR</h4>
													<p className="text-white f14">
														{(post.length && post[i].vip) || (
															<div className="w-50 mx-auto">
																<Loader />
															</div>
														)}
													</p>
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
		</div>
	);
};

export default WinnerNft;
