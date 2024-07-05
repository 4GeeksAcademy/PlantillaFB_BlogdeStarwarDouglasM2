import React, { useEffect, useState } from 'react';
import { PlanetCard } from './PlanetCard.jsx';

export const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);

    const planetImages = {
        Tatooine: 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357',
        Alderaan: 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830',
        "Yavin IV": 'https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729',
        Hoth: 'https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20170802030704',
        Dagobah: 'https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132',
        Bespin: 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537',
        Endor: 'https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170629163352',
        Naboo: 'https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307',
        Coruscant: 'https://static.wikia.nocookie.net/esstarwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20221030195452',
        Kamino: 'https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20210616005549'
    };

    const loadPlanets = async () => {
        try {
            const response = await fetch('https://www.swapi.tech/api/planets/');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            const planetsDetails = await Promise.all(data.results.map(async (planet) => {
                const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch planet details');
                }
                const planetData = await res.json();
                const planetProps = planetData.result.properties;
                planetProps.image = planetImages[planetProps.name] || 'https://example.com/default.jpg';
                return planetProps;
            }));

            setPlanets(planetsDetails);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadPlanets();
    }, []);

    return (
        <div>
            <h1 className='star-wars-title mt-5'>Star Wars Planets</h1>
            <div className='row'>
                <div className='d-flex scroll-container'>
                    {planets.map((planet, index) => (
                        <PlanetCard key={`${planet.uid}-${index}`} planet={planet} />
                    ))}
                </div>
            </div>
        </div>
    );
};
