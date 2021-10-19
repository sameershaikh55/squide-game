import React from "react";

// IMPORT COMPONENTS
import Footer from "../../components/Footer";

// IMPORT IMAGES
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";

const Dashboard = () => {
	// NFT WINNER
	const data = [
		{
			t: "VIP BEAR",
			n: "bear",
		},
		{
			t: "VIP BUFFALO",
			n: "buffalo",
		},
		{
			t: "VIP EAGLE",
			n: "eagle",
		},
		{
			t: "VIP LION",
			n: "lion",
		},
		{
			t: "VIP TIGER",
			n: "tiger",
		},
		{
			t: "VIP DEEP",
			n: "deep",
		},
	];

	// PIGGY BANK
	const data2 = [
		{
			t: "10 SOLANA",
			n: "10 solana",
		},
		{
			t: "15 SOLANA",
			n: "15 solana",
		},
		{
			t: "100 SOLANA",
			n: "100 solana",
		},
	];

	return (
		<>
			{/* <!-- Modal --> */}
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<h5 class="text-center color1 my-3 w-100">Generate Winner</h5>
						<div class="modal-body">
							<div className="d-flex justify-content-center">
								<img src={ring} alt="" />
							</div>
							<h4 className="text-center mt-4 color1 fw600">Winner is:</h4>
							<p className="text-center text-white mb-4">LOLO</p>
							<button className="w-100 themeBtn" data-bs-dismiss="modal">
								Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="panel_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-flex w-100 justify-content-between mt-5">
							<div>
								<img src={logo} alt="" />
							</div>
							<div>
								<button className="themeBtn px-5 f20">log out</button>
							</div>
						</div>
					</div>

					<h1 className="mt-5 text-center color1 fw600">NFT VIP Winners</h1>
					<div className="row gy-5 mt-1">
						{/* BODY START */}
						{data.map((prev, i) => {
							return (
								<div className="col-4">
									<h4 className="text-center color3 f20">VIP BEAR</h4>
									<input
										className="w-100 px-3 text-white"
										type="text"
										name={prev.n}
										placeholder={`Enter vip ${prev.n}`}
									/>
									<button
										data-bs-toggle="modal"
										data-bs-target="#exampleModal"
										className="w-100 themeBtn mt-2"
									>
										Publish
									</button>
								</div>
							);
						})}
						{/* BODY END */}
					</div>

					<h1 className="mt-5 text-center color1 fw600">Piggy Bank</h1>
					<div className="row gy-5 mt-1">
						{/* BODY START */}
						{data2.map((prev, i) => {
							return (
								<div className="col-4">
									<h4 className="text-center color1 f20">{prev.t}</h4>
									<input
										className="w-100 px-3"
										type="text"
										name={prev.n}
										placeholder={`Enter ${prev.n}`}
									/>
									<button className="w-100 themeBtn mt-2">
										Generate winner
									</button>
									<button className="w-100 themeBtn mt-2">Publish</button>
								</div>
							);
						})}
						{/* BODY END */}
					</div>

					<h1 className="mt-5 text-center color1 fw600">Boss NFT</h1>
					<div className="row gy-4 mt-1">
						{/* BODY START */}
						<div className="col-4 mx-auto">
							<h4 className="text-center color3 mb-3 fw600 f20">Boss NFT</h4>
							<input
								className="w-100 px-3"
								type="text"
								placeholder={`Enter boss NFT`}
							/>
							<button className="w-100 themeBtn mt-2">Generate winner</button>
							<button className="w-100 themeBtn mt-2">Publish</button>
						</div>
						{/* BODY END */}
					</div>

					<h1 className="mt-5 text-center color1 fw600">Roadmap</h1>
					<div className="row gy-4 mt-1">
						{/* BODY START */}
						<div className="col-4 mx-auto">
							<p className="text-center text-white">
								The status of the roadmap is now
							</p>
							<input
								className="w-100 px-3"
								type="text"
								placeholder="Enter roadmap"
							/>
							<button className="w-100 themeBtn mt-2">Publish</button>
						</div>
						{/* BODY END */}
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</div>
		</>
	);
};

export default Dashboard;
