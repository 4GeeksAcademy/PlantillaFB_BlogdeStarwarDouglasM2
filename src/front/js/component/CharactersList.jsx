import React, { useEffect, useState } from 'react';
import { CharacterCard } from '../component/CharacterCard.jsx';

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);

    const loadCharacters = async () => {
        try {
            const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
            const data = await response.json();
            setCharacters(data);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <div>
                <div className='d-flex'>
                    {characters.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharactersList;
