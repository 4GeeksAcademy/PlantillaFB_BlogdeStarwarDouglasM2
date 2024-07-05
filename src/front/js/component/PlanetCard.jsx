import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '/workspaces/PlantillaFB_BlogdeStarwarDouglasM2/src/front/js/store/appContext.js'; 

export const PlanetCard = ({ planet }) => {
    const navigate = useNavigate();
    const { state, actions } = useContext(Context); 

    const handleLearnMore = () => {
        navigate(`/planet/${planet.uid}`, { state: { planet } });
    };

    const handleAddFavorite = () => {
        actions.addFavorite(planet); 
    };


    return (
        <div className="card col-4 ms-2 text-start backgCard" style={{ width: "18rem" }}>
            <div style={{ height: "300px", overflow: "hidden" }}>
                <img
                    src={planet.image}
                    className="card-img-top zoom"
                    alt={planet.name}
                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                />
            </div>
            <div className="card-body sombra">
                <h5 className="card-title mb-3">{planet.name}</h5>
                <p className="m-0">
                    <strong>Population:</strong> {planet.population}
                </p>
                <p className="m-0">
                    <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p className="m-0">
                    <strong>Climate:</strong> {planet.climate}
                </p>
                <div>
                    <button type="button" className="btn btn-outline-primary me-3 mt-4" onClick={handleLearnMore}>Learn More!</button>
                    <button type="button" className="btn btn-outline-warning ms-5 mt-4" onClick={handleAddFavorite}>
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
