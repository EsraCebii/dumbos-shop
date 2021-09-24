import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProduct } from "../api";
import ImageGallery from 'react-image-gallery';
import { Button, Icon, Item, Segment, } from 'semantic-ui-react'
import { useBasket} from '../context/BasketContext';
import {useFav} from "../context/FavContext"
function Detail() {
    const { id } = useParams();
    const { addToBasket}=useBasket();
    const { addToFav}=useFav();


    const { isLoading, error, data } = useQuery(['product', id], () =>
        fetchProduct(id)
    )

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    
    const images = [
        {
            original: data.image,
        },
        {
            original: data.image2,
        }
    ]

    return (
        <Segment >

        <Item.Group relaxed className="detail">
            <Item className="item">
                <Item.Image size="large">
                    <ImageGallery items={images} />
                </Item.Image>

                <Item.Content className="content" verticalAlign='middle'>
                    <Item.Header>{data.name}</Item.Header>
                    <Item.Meta>
                        <span >{data.product}</span>
                    </Item.Meta>
                    <Item.Description> <strong>Material:</strong> {data.material}</Item.Description>
                    <Item.Description> <strong>Color:</strong>{data.color}</Item.Description>
                    <Item.Description> <strong>Category:</strong> {data.department}</Item.Description>
                    <Item.Description>{data.description}</Item.Description>
                    
                    <Item.Header><Icon name="lira"></Icon>{data.price}</Item.Header>
                   
                    <Item.Extra className="extra">
                        <Link to="/cart">
                        <Button animated='vertical' floated="right" color='yellow'
                        onClick={()=> addToBasket(data)}>
                            <Button.Content hidden>Add </Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                        </Link>
                        <Button
                            onClick={()=> addToFav(data)}
                            floated='right'
                            color="red"
                            content='Like'
                            icon='heart'
                            label={{ basic: true, color: "red", pointing: 'left', content: data.kalp }}
                        />
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
        </Segment>


    )
}

export default Detail;
