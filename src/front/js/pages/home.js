import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharactersList from "../component/CharactersList.jsx";
import PlanetsList from "../component/PlanetsList.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center m-0 mt-5">
			<h1>Hello Rigo!!</h1>
			<div className="overflow-auto p-0">
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
			<div className="alert alert-info mt-4">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p className="mt-3">
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
