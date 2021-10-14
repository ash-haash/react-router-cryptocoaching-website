import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const SingleService = (props) => {

    const { id, img, title, description, price } = props.service;

    return (
        <div className="col-4">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ cursor: 'pointer', color: 'white', background: 'darkorange', fontWeight: 'bold' }}>
                        <p>{price}<span> $</span></p>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default SingleService;