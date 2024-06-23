import React from "react";
import { useLocation } from "react-router-dom";

export const PlanetDetail = () => {
    const location = useLocation();
    const { planet } = location.state;

    return (
        <div>
            <div className="d-flex character-info backgColorCaracDetail pb-5">
                <div className="imgCaracterDetail">
                    <img src={planet.image} alt={planet.name} className="sombra" />
                </div>
                <div className="namePlanetDetail">
                    <p>{planet.name}</p>
                </div>
            </div>
            <div className="d-flex flex-wrap border-top border-4 border-warning backgColorCaracDetail textCharacterDetail">
                <div className="flex-fill p-2">
                    <h4>Nombre:</h4>
                    <h6 className="textCharacterDetailProperty">{planet.name}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>diameter:</h4>
                    <h6 className="textCharacterDetailProperty">{planet.diameter}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>rotation_period:</h4>
                    <h6 className="textCharacterDetailProperty">{planet.rotation_period}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>orbital_period:</h4>
                    <h6 className="textCharacterDetailProperty">{planet.orbital_period}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>gravity</h4>
                    <h6 className="textCharacterDetailProperty">{planet.gravity}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>climate</h4>
                    <h6 className="textCharacterDetailProperty">{planet.climate}</h6>
                </div>
            </div>
        </div >
    );
};
