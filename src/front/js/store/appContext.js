import React, { useState, useEffect } from "react";

const initialStore = {
    store: {
        planets: [], // Inicialmente vacío, se llenará con la carga inicial de planetas
        favorites: [] // Arreglo de favoritos inicialmente vacío
    },
    actions: {
        addFavorite: () => {}, // Función para agregar favoritos
        removeFavorite: () => {}, // Función para eliminar favoritos
        getMessage: () => {} // Función opcional para obtener mensajes
    }
};

export const Context = React.createContext(initialStore);

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialStore);

    useEffect(() => {
        const fetchData = async () => {
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

                setState({
                    ...state,
                    store: {
                        ...state.store,
                        planets: planetsDetails
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const actions = {
        addFavorite: (planet) => {
            const updatedFavorites = [...state.store.favorites, planet];
            setState({
                ...state,
                store: {
                    ...state.store,
                    favorites: updatedFavorites
                }
            });
        },
        removeFavorite: (planetToRemove) => {
            setState(prevState => {
                const updatedFavorites = prevState.store.favorites.filter(planet => planet.uid !== planetToRemove.uid);
                
                return {
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: updatedFavorites
                    }
                };
            });
        },
        
        
        getMessage: () => {
            // Esta función puede implementarse si se necesita obtener mensajes
        }
    };
    
    
    

    return (
        <Context.Provider value={{ state, actions }}>
            {children}
        </Context.Provider>
    );
};
