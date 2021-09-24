import { useState,useEffect, createContext, useContext, } from "react";

const FavContext = createContext();

const defaultFav= JSON.parse(localStorage.getItem('fav')) || [];


const FavProvider = ({ children }) => {
	const [fitems, setFitems] = useState(defaultFav);

	useEffect(() => {
		localStorage.setItem('fav', JSON.stringify(fitems));
	}, [fitems]);

	const addToFav = (data) => {
        setFitems((prev)=> [...prev,data]);
	};
    
    

	const values = {
		fitems,
		setFitems,
        addToFav,

	};

	return (
		<FavContext.Provider value={values}>{children}</FavContext.Provider>
	);
};

const useFav = () => useContext(FavContext);

export { FavProvider, useFav };