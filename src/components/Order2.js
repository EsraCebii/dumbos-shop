import React from 'react'
import { Container, Progress, } from 'semantic-ui-react';


function Order2() {

    return (
        <>
            <Container>
                <Progress percent={100} success active >
                    Your order is successful !
                </Progress>
            </Container>
        </>
    )
}

export default Order2;
