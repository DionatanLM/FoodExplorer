import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("@foodexplorer:favorites");
    return JSON.parse(storedFavorites) || [];
  });

  const addDishToFavorite = (data) => {
    setFavorites((prevFavorites) => [...prevFavorites, data]);
  };

  const removeDishFromFavorite = (data) => {
    setFavorites((prevFavorites) => prevFavorites.filter((dish) => dish.id !== data.id));
  };

  useEffect(() => {
    localStorage.setItem("@foodexplorer:favorites", JSON.stringify(favorites));
  }, [favorites]);

  const favoritesContextValue = {
    favorites,
    addDishToFavorite,
    removeDishFromFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  return context;
};

export { FavoritesProvider, useFavorites };
