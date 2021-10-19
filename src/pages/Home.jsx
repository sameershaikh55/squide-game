import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Cta from "../components/Cta";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Collection />
			<Cta />
			<Roadmap />
			<Cta />
			<Team />
			<Footer />
		</>
	);
};

export default Home;
