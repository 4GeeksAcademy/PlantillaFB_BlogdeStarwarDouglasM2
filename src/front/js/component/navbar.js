import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '/workspaces/PlantillaFB_BlogdeStarwarDouglasM2/src/front/js/store/appContext.js';

export const Navbar = () => {
    const { state, actions } = useContext(Context);
    const { store } = state;

    const handleRemoveFavorite = (item) => {
        actions.removeFavorite(item); 
    };

    return (
        <nav className="navbar navbar-light backgroundColorNavBar">
            <div className="container">
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8UEvq-8gIY_w1LvSUysHTGt-J_gAki08vg&s" className="w-50" alt="Logo" />
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos <span className="badge bg-secondary">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {store && store.favorites && store.favorites.length === 0 ? (
                                <li className="text-center text-muted">No hay favoritos</li>
                            ) : (
                                store.favorites.map((item) => (
                                    <li key={item.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                        <span>{item.name}</span>
                                        <button type="button" className="btn btn-sm btn-danger ms-2" onClick={() => handleRemoveFavorite(item)}>Remove</button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
