import React from 'react';
import { useFav} from "../context/FavContext";
import FavItem from './FavItem';
import { Item, Container, Header, Icon } from 'semantic-ui-react';

function Fav() {
    const { fitems } = useFav();
    return (
        <>
            <Container>
                <Header as='h1' textAlign='center' color="red">My favorites <Icon name='like' /> </Header>
                <Item.Group divided>
                    {fitems.map((item, key) =>
                        <FavItem key={key} item={item} />)
                    }
                </Item.Group>
            </Container>

        </>
    )
}

export default Fav
