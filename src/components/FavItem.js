import React from 'react';
import { Icon, Item, Label } from 'semantic-ui-react';

function FavItem({item}) {
    return (
        <>
        <Item>
        <Item.Image src={item.image} />
  
        <Item.Content>
          <Item.Header >{item.name}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{item.product}</span>
          </Item.Meta>
          <Item.Description><strong><Icon name="lira"></Icon>{item.price}</strong></Item.Description>
          <Item.Extra>
            {/* <Button color="yellow" floated='right'>
              Buy 
              <Icon name='right chevron' />
            </Button> */}
            <Label>{item.indirim ? 'Price dropped' : 'free shipping'}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
      </>
    )
}

export default FavItem
