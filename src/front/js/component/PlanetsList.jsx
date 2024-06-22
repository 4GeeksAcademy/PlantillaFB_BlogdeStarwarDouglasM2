import React, { useEffect, useState } from 'react';
import { PlanetCard } from '../component/PlanetCard.jsx';

const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);

    const loadPlanets = async () => {
        try {
            const response = await fetch('https://www.swapi.tech/api/planets/');
            const data = await response.json();
            setPlanets(data.results);
        } catch (error) {
            console.error('Error fetching planets:', error);
        }
    };

    useEffect(() => {
        loadPlanets();
    }, []);

    return (
        <div>
            <h1>Star Wars Planets</h1>
            <div className='row'>
                <div className='d-flex scroll-container'>
                    {planets.map(planet => (
                        <PlanetCard key={planet.uid} planet={planet} /> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanetsList;
