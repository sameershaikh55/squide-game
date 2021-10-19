import React, { useEffect, useState } from "react";

// IMPORTING FIREBASE
import { db } from "../firebase/firebase";

// IMPORTING IMAGES
import Team from "../assets/nft/Team-1.png";
import Team2 from "../assets/nft/Team-2.png";
import Team3 from "../assets/nft/Team-3.png";
import Loader from "./Loader";

const Piggy = () => {
	const [piggy, setPiggy] = useState([]);

	// FOR PERCENTAGE
	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db
			.collection("piggy-bank")
			.onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					getPostsFromFirebase.push({
						...doc.data(), //spread operator
						key: doc.id, // `id` given to us by Firebase
					});
				});
				setPiggy(getPostsFromFirebase);
			});

		// return cleanup function
		return () => subscriber();
	}, [piggy]); // empty dependencies array => useEffect only called once

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
	];
	return (
		<div className="piggy_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="f28 color1">DISTRIBUTION OF PIGGY BANKS</h1>
								<p className="text-white">
									The people who have won the draw are
								</p>
							</div>

							<div className="inner_nft_winner mt-5">
								<div className="row gy-4">
									{data.map((prev, i) => {
										return (
											<div key={i} className="col-10 col-sm-6 col-md-4 mx-auto">
												<img className="w-100" src={prev.i} alt="" />
												<div className="text-center">
													<h4 className="color1 fw600 f22">10 SOLANA</h4>
													<p className="text-white f14">
														{(piggy.length && piggy[i].solana) || (
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

export default Piggy;
