import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Cardd({ item }) {
  const extra = (
    <div className="content">
      <span className="right floated">
        <i className="heart outline like icon"></i>
        {item.kalp} likes
      </span>
      <i className="comment icon"></i>
      {item.yorum} comments
    </div>

  )
  const para = (
    <span style={{marginLeft:'90px'}}>
      {/* heart outline */}
      <strong>
      <Icon name='lira sign' />
      {item.price}
      </strong>
    </span>
  )

  return (
    // {`/${item.id}`
    <>
      {/* 
      </Link> */}
      <Card>
      <Link to={item.id}>
        <Card.Content>
          <Image src={item.image} size="medium" floated="left"/>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{item.product}</Card.Meta>
          <Card.Description >{para}
          </Card.Description>
        </Card.Content>
        </Link>
        <Card.Content>{extra}
        </Card.Content>
      </Card>
    </>
  )
}

export default Cardd;
