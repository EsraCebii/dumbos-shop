import React from 'react';
import { useBasket } from "../context/BasketContext";
import CartItem from './CartItem';
import { Item, Container, Header, Progress, Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom"


function Cart() {
    const { items } = useBasket();
    console.log(items);
    return (
        <>
            <Container>
                <Progress percent={0} active color='orange'/>
                <Header as='h1' textAlign='center' color="yellow">SHOPPING BAG</Header>
                <Item.Group divided>
                    {items.map((item, key) =>
                        <CartItem key={key} item={item} />)
                    }
                </Item.Group>
                {items.length > 0 && (
                    <Item.Extra>
                        <Link to="bag">
                            <Button icon labelPosition='right' basic color='green' floated='right'>
                                Next
                                <Icon name='right arrow' />
                            </Button>
                        </Link>
                    </Item.Extra>
                )}

            </Container>

        </>
    )
}

export default Cart;
