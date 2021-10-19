import React from "react";

// IMPORT ICONS
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// IMPORTING SCROLL
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer inconsolata"
		>
			<ul className="list-unstyled mb-0">
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="about"
						smooth={true}
						duration={300}
						spy={true}
					>
						About
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="roadmap"
						smooth={true}
						duration={300}
						spy={true}
						offset={-100}
					>
						Roadmap
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="team"
						smooth={true}
						duration={300}
						spy={true}
						offset={-50}
					>
						Our Team
					</Link>
				</li>
				<li className="mb-0">
					<Link
						activeClass="activeNav"
						to="/winner"
						smooth={true}
						duration={300}
						spy={true}
						offset={-50}
					>
						Winners
					</Link>
				</li>
				<li>
					<a target="blank" href="https://discord.gg/qfTc96uk">
						<FaDiscord fontSize="1.8rem" />
					</a>
					<a
						target="blank"
						className="px-3"
						href="https://www.instagram.com/csg_nft/"
					>
						<BsInstagram fontSize="1.6rem" />
					</a>
					<a target="blank" href="https://twitter.com/CSG_NFT">
						<FaTwitter fontSize="1.6rem" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
