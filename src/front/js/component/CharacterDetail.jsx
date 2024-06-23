import React from "react";
import { useLocation } from "react-router-dom";

export const CharacterDetail = () => {
    const location = useLocation();
    const { character } = location.state;

    return (
        <div>
            <div className="d-flex character-info backgColorCaracDetail pb-5">
                <div className="imgCaracterDetail">
                    <img src={character.image} alt={character.name} />
                </div>
                <div>
                <h1>{character.name}</h1>
                    <a href={character.wiki} target="_blank" rel="noopener noreferrer">
                        {character.wiki}
                    </a>
                    <h4>Afiliaciones</h4>
                    {character.affiliations && character.affiliations.length > 0 ? (
                        <ul className="custom-list">
                            {character.affiliations.map((affiliation, index) => (
                                <li key={index}>{affiliation}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posee afiliaciones.</p>
                    )}
                    <h4>Masters</h4>
                    {character.masters && character.masters.length > 0 ? (
                        <ul className="custom-list">
                            {character.masters.map((master, index) => (
                                <li key={index}>{master}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posee masters.</p>
                    )}
                </div>
            </div>
            <div className="d-flex flex-wrap border-top border-4 border-warning backgColorCaracDetail textCharacterDetail">
                <div className="flex-fill p-2">
                    <h4>Nombre</h4>
                    <h6 className="textCharacterDetailProperty">{character.name}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>Género</h4>
                    <h6 className="textCharacterDetailProperty">{character.gender}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>Color de Cabello</h4>
                    <h6 className="textCharacterDetailProperty">{character.hairColor}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>Color de Ojos</h4>
                    <h6 className="textCharacterDetailProperty">{character.eyeColor}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>Altura</h4>
                    <h6 className="textCharacterDetailProperty">{character.height}</h6>
                </div>
                <div className="flex-fill p-2">
                    <h4>Especie</h4>
                    <h6 className="textCharacterDetailProperty">{character.species}</h6>
                </div>
            </div>
        </div >
    );
};
