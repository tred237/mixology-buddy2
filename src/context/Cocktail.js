import { createContext, useState, useEffect, useReducer } from "react";

export const CocktailContext = createContext();
// export const CocktailDispatchContext = createContext();

export function CocktailProvider({ children }) {
    const [cocktails, setCocktails] = useState([]);
    const [maxCocktailId, setCocktailMaxId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/cocktails')
          .then(res => res.json())
          .then(data => {
            setCocktails(data)
            const cocktailIds = data.map(e => parseInt(e.id, 10))
            setCocktailMaxId(Math.max(...cocktailIds))
        })
    }, []);

    // const [cocktails, dispatch] = useReducer({cocktailsReducer, allCocktails})

    return (
        <CocktailContext.Provider value={{cocktails, setCocktails, maxCocktailId, setCocktailMaxId}}>
            {/* <CocktailDispatchContext.Provider value={dispatch}> */}
                { children }
            {/* </CocktailDispatchContext.Provider> */}
        </CocktailContext.Provider>
    )
}

function cocktailsReducer(cocktails, action) {
    switch (action.type) {
        case 'added': {
            return [...cocktails, {
                id: Math.floor(Math.random()),
                strDrink: action.drink,
            }];
        }
        default: {
            throw Error('Invalid Action: ' + action.type)
        }
    }
}