import React from "react";
import "../../styles/home.css";
import CharactersList from "../component/CharactersList.jsx";
import { PlanetsList } from "../component/PlanetsList.jsx"; // Note the curly braces

export const Home = () => {
	return (
		<div className="container-fluid w-100 text-center m-0 mt-5 backgHome">
			<div className="overflow-auto w-100">
				<div className="m-3">
					<CharactersList />
				</div>
			</div>
			<div className="overflow-auto w-100">
				<div className="m-3">
					<PlanetsList />
				</div>
			</div>
		</div>
	);
};
