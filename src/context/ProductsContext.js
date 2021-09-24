import { createContext } from "react";
import { useQuery } from 'react-query';

const ProductsContext = createContext();

export const ProductsProvider = ({children})=> {
    
    const { isLoading, error, data } = useQuery('products', () =>
        fetch('https://6149bc3707549f001755a557.mockapi.io/products').then(res =>
            res.json()
        )
    );
    

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;


    const values={
        data,
        error,
        isLoading,
        
    }
    return <ProductsContext.Provider value={values}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext;