import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharactersList from "../component/CharactersList.jsx";
import PlanetsList from "../component/PlanetsList.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid w-100 text-center m-0 mt-5 backgHome">
			<div className="overflow-auto w-100">
				<div className="m-3">
					<CharactersList />
				</div>
			</div>
			<div className="overflow-auto">
				<div className="m-3">
					<div>
						<PlanetsList />
					</div>
				</div>
			</div>
		</div>
	);
};
