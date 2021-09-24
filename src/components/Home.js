import { React, useContext,useState } from 'react';
import Cardd from "./Card";
import { Grid } from 'semantic-ui-react';
import ProductsContext from '../context/ProductsContext';




function Home() {
    const { data } = useContext(ProductsContext);
    const [input, setInput]= useState("");

    const filter = data.filter((item) => {
        return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    });

    return (
        <>
            <div>
                <div className="search-container">
                    <input placeholder="Search..." 
                    className="search-input" 
                    onChange={(e)=>setInput(e.target.value)}
                    value= {input}
                    />
                    <a href="/#" className="search-btn">
                        <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
            <div className="grid">
                <Grid relaxed columns={4} >
                    {
                        filter.map((item, key) =>
                            <Grid.Column key={key}>
                                <Cardd item={item} />
                            </Grid.Column>)
                    }

                </Grid>
            </div>
        </>
    )
}

export default Home;
