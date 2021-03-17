import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cars = ({car}) => {
    const { brandName,carName, image, price, _id, rating } = car
    return (
        <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={`data:image/png;base64,${image.img}`} />
                <Card.Body>
                    <Card.Title>{carName}</Card.Title>
                    <Card.Text>
                      Price: ${price}
                    </Card.Text>
                    <Link to={`/details/${_id}`}><Button variant="primary">Car Details</Button></Link>
          </Card.Body>
            </Card>
        </div>
    );
};

export default Cars;