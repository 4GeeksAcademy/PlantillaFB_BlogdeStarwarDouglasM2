import React, { useState, useEffect } from "react";

const initialStore = {
    store: {
        favorites: []
    },
    actions: {
        addFavorite: (planet) => {},
        removeFavorite: (planet) => {},
        getMessage: () => {}
    }
};

export const Context = React.createContext(initialStore);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(initialStore);

        const getStore = () => state.store;
        const getActions = () => state.actions;

        const setStore = (updatedStore) => {
            setState({ ...state, store: updatedStore });
        };

        useEffect(() => {
            state.actions.getMessage();
        }, []);

        return (
            <Context.Provider value={{ ...state, getStore, getActions, setStore }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;
