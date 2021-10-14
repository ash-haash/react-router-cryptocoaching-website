import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const Rank = (props) => {

    const { id, img, rank, name, price, marketCap } = props.rank;

    return (
        <div className="col-4">
            <CardGroup>
                <Card>
                    <Card.Img className="center img-fluid" style={{ width: '400px', height: '280px', }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Rank: {rank}</Card.Title>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Market Cap: {marketCap}<span> $</span></Card.Title>
                    </Card.Body>
                    <Card.Footer style={{ cursor: 'pointer', color: 'white', background: 'darkorange', fontWeight: 'bold' }}>
                        <p>Price: {price}<span> $</span></p>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Rank;