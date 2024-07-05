import React, { useState, useEffect } from "react";

const initialStore = {
    store: {
        planets: [],     
        characters: [],   
        favorites: []     
    },
    actions: {
        addFavorite: () => {},    
        removeFavorite: () => {}, 
        getMessage: () => {}     
    }
};

export const Context = React.createContext(initialStore);

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialStore);

    useEffect(() => {
        const fetchPlanets = async () => {
            const planetsResponse = await fetch('https://www.swapi.tech/api/planets/');
            const planetsData = await planetsResponse.json();
            const planets = planetsData.results;

            const finalPlanetsList = [];

            for (let planet of planets) {
                const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
                const { result } = await res.json();
                const fullPlanet = {
                    ...planet,
                    properties: result.properties
                };
                finalPlanetsList.push(fullPlanet);
            }

            setState(prevState => ({
                ...prevState,
                store: {
                    ...prevState.store,
                    planets: finalPlanetsList
                }
            }));
        };

        const fetchCharacters = async () => {
            const charactersResponse = await fetch('https://akabab.github.io/starwars-api/api/all.json');
            const charactersData = await charactersResponse.json();
            const characters = charactersData.results;

            setState(prevState => ({
                ...prevState,
                store: {
                    ...prevState.store,
                    characters: characters
                }
            }));
        };

        fetchPlanets();
        fetchCharacters();
    }, []);

    const actions = {
        addFavorite: (item) => {
            const updatedFavorites = [...state.store.favorites, item];
            setState(prevState => ({
                ...prevState,
                store: {
                    ...prevState.store,
                    favorites: updatedFavorites
                }
            }));
        },
        removeFavorite: (itemToRemove) => {
            setState(prevState => ({
                ...prevState,
                store: {
                    ...prevState.store,
                    favorites: prevState.store.favorites.filter(fav => fav.name !== itemToRemove.name)
                }
            }));
        },
        getMessage: () => {
           
        }
    };
    
    

    return (
        <Context.Provider value={{ state, actions }}>
            {children}
        </Context.Provider>
    );
};
