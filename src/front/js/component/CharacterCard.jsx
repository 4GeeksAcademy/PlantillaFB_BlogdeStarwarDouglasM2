import React, { useContext } from 'react';
import { Context } from '/workspaces/PlantillaFB_BlogdeStarwarDouglasM2/src/front/js/store/appContext.js';
import { useNavigate } from 'react-router-dom';

export const CharacterCard = ({ character }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleAddFavorite = () => {
        actions.addFavorite(character);
    };
    const handleLearnMore = () => {
        navigate(`/character/${character.id}`, { state: { character } });
    };

    return (
        <div className="card col-4 ms-2 text-start backgCard" style={{ width: "18rem" }}>
            <div style={{ height: "300px", overflow: "hidden" }}>
                <img src={character.image} className="card-img-top zoom" alt={character.name} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
            </div>
            <div className="card-body sombra">
                <h5 className="card-title mb-3">{character.name}</h5>
                <p className="m-0"><strong>Gender:</strong> {character.gender}</p>
                <p className="m-0"><strong>Hair Color:</strong> {character.hairColor}</p>
                <p className="m-0"><strong>Eye Color:</strong> {character.eyeColor}</p>
                <div>
                    <button type="button" className="btn btn-outline-primary me-5 mt-4" onClick={handleLearnMore}> Learn More! </button>
                    <button type="button" className="btn btn-outline-warning ms-5 mt-4" onClick={handleAddFavorite}><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};
