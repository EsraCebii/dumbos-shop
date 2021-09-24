import React,{useState} from 'react';
import { Button,   Icon,   Item, ItemContent, } from 'semantic-ui-react';
import Total from './Total';
import {useBasket} from "../context/BasketContext";

function CartItem({ item }) {
    const {removeFromBasket}= useBasket();
  
    
    const [count, setCount]=useState(1);
    const azalt = ()=> {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    const itemPrice = (item.price)*count;



    return (
        <>
        <Item>
            <Item.Image src={item.image} />
            <Item.Content>
                <Item.Header >{item.name}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{item.product}</span>
                </Item.Meta>
                <Item.Description><strong><Icon name="lira"></Icon>{itemPrice}</strong></Item.Description>
                <Item.Extra>
                    <Button.Group>
                        <Button onClick={() => azalt()}>-</Button>
                        <Button.Or text={count} />
                        <Button color='orange' onClick={() => setCount(count + 1)}>+</Button>
                    </Button.Group>
                </Item.Extra>
            </Item.Content>
            <ItemContent>
                <Button icon="delete" onClick={()=> removeFromBasket(item.id)}></Button>
            </ItemContent>
        </Item>
        <Total itemPrice={itemPrice}/>
        </>

    )
}

export default CartItem;
