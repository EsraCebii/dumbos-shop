import React from 'react'
import { Container, Header, Progress, Button, Checkbox, Form } from 'semantic-ui-react';
import { useBasket } from "../context/BasketContext";
import { Link } from 'react-router-dom';


function Order() {
    const { items } = useBasket();

    return (
        <>
            <Container>
                <Progress percent={50} active color='orange'/>
                <Header as='h1' textAlign='center' color="yellow">SHOPPING BAG</Header>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='esracebi.81@gmail.com' />
                    </Form.Field>
                    <Form.TextArea label='Address' placeholder='Type your address...' />
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Link to="bag2">
                    <Button type='submit'>Submit</Button>
                    </Link>
                </Form>



            </Container>

        </>
    )
}

export default Order;
