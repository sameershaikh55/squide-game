import React, { useState } from "react";

const Roadmap = () => {
	const [percent, setPercent] = useState(100);

	return (
		<div className="roadmap_container">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="head text-center color1">Roadmap for participants</h1>
					<p className="para text-center text-white">
						This is our roadmap for the project. Depending on the type and
						amount of NFT you own, you will get different benefits throughout
						the project.
					</p>

					<div className="roadmap_inner_container">
						<section
							id={`${
								(percent === 10 && "cd-timeline1") ||
								(percent === 20 && "cd-timeline2") ||
								(percent === 30 && "cd-timeline3") ||
								(percent === 40 && "cd-timeline4") ||
								(percent === 50 && "cd-timeline5") ||
								(percent === 60 && "cd-timeline6") ||
								(percent === 70 && "cd-timeline7") ||
								(percent === 80 && "cd-timeline8") ||
								(percent === 90 && "cd-timeline9") ||
								(percent === 100 && "cd-timeline10")
							}`}
							class="cd-container"
						>
							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-picture"></div>

								<div class="cd-timeline-content">
									<div className="text-end">
										<h2 className="color1 fw600">PROJECT LAUNCH</h2>
										<p>Launch of social networks and website.</p>
									</div>
									<span
										class={`cd-date fw600 ${
											(percent >= 10 && "color1") || "text-white"
										}`}
									>
										10%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-movie"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<h2 className="color1 fw600">RECRUITMENT OF SOLDIERS</h2>
									<p>Launch of soldiers' NFTs</p>
									<span
										class={`cd-date fw600 ${
											(percent >= 20 && "color1") || "text-white"
										}`}
									>
										20%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-picture"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<div className="text-end">
										<h2 className="color1 fw600">RECRUITMENT OF PLAYERS</h2>
										<p>Launch of players' NFTs.</p>
									</div>
									<span
										class={`cd-date fw600 ${
											(percent >= 30 && "color1") || "text-white"
										}`}
									>
										30%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-location"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<h2 className="color1 fw600">RECRUITMENT FRONT MAN</h2>
									<p>Launch NFT of front man.</p>
									<span
										class={`cd-date fw600 ${
											(percent >= 40 && "color1") || "text-white"
										}`}
									>
										40%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-location"></div>

								<div class="cd-timeline-content">
									<div className="text-end">
										<h2 className="color1 fw600">GIFT 4 VIP NFT</h2>
										<p>To the first 4 people who have 15 NFT of soldiers.</p>
									</div>
									<span
										class={`cd-date fw600 ${
											(percent >= 50 && "color1") || "text-white"
										}`}
									>
										50%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-movie"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<h2 className="color1 fw600">GIFT 1 NFT VIP</h2>
									<p>To the first person with 10 NFT of players.</p>
									<span
										class={`cd-date fw600 ${
											(percent >= 60 && "color1") || "text-white"
										}`}
									>
										60%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-location"></div>

								<div class="cd-timeline-content">
									<div className="text-end">
										<h2 className="color1 fw600">GIFT 1 NFT VIP</h2>
										<p>The one with front man NFT.</p>
									</div>
									<span
										class={`cd-date fw600 ${
											(percent >= 70 && "color1") || "text-white"
										}`}
									>
										70%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-movie"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<h2 className="color1 fw600">
										FIRST PIGGY BANK DISTRIBUTION
									</h2>
									<p>
										Drawing of 25 SOL among all persons owning a player NFT at
										the time of the draw.
									</p>
									<span
										class={`cd-date fw600 ${
											(percent >= 80 && "color1") || "text-white"
										}`}
									>
										80%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-location"></div>

								<div class="cd-timeline-content">
									<div className="text-end">
										<h2 className="color1 fw600">
											SECOND PIGGY BANK DISTRIBUTION
										</h2>
										<p>
											Drawing of 15 SOL among all persons owning a soldier NFT
											at the time of the drawing.
										</p>
									</div>
									<span
										class={`cd-date fw600 ${
											(percent >= 90 && "color1") || "text-white"
										}`}
									>
										90%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}

							<div class="cd-timeline-block">
								<div class="cd-timeline-img cd-movie"></div>
								{/* <!-- cd-timeline-img --> */}

								<div class="cd-timeline-content">
									<h2 className="color1 fw600">
										THIRD PIGGY BANK DISTRIBUTION
									</h2>
									<p>
										Drawing of 100 SOL among all persons owning a VIP NFT at the
										time of the draw.
									</p>
									<span
										class={`cd-date fw600 ${
											(percent >= 100 && "color1") || "text-white"
										}`}
									>
										100%
									</span>
								</div>
								{/* <!-- cd-timeline-content --> */}
							</div>
							{/* <!-- cd-timeline-block --> */}
						</section>
						{/* <!-- cd-timeline --> */}
					</div>

					<div className="text-center mb-5 pb-1">
						<p className="f24 mb-2 text-white">
							Now what is going to happen in the Collection Squid Game ?
						</p>
						<h1 className="color1 f48 fw600">Crazy Surprises</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
