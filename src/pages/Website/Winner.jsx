import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WinnerNft from "../../components/WinnerNft";
import Cta from "../../components/Cta";
import Piggy from "../../components/Piggy";
import BossNft from "../../components/BossNft";

const Winner = () => {
	return (
		<>
			<Header />
			<WinnerNft />
			<Cta />
			<Piggy />
			<Cta />
			<BossNft />
			<Footer />
		</>
	);
};

export default Winner;
