import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light backgroundColorNavBar">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8UEvq-8gIY_w1LvSUysHTGt-J_gAki08vg&s" className="w-50"></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
