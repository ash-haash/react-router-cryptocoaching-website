import React from 'react';
import { CardGroup, Card, Row, Col, Button } from 'react-bootstrap';

const Hservice = (props) => {

    const { id, title, description, img, price } = props.hservice;

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

export default Hservice;