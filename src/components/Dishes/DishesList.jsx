import React from 'react';
import { Container, Stack, Row, Col } from 'react-bootstrap';
import './disheslist.css';
import { FcRating } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


export const DishesList = ({ arrayDish: dishArray }) => {
    const navigate = useNavigate();

    const handleClickRow = () => {
        // setRestaurant({
        //     ...restaurant,
        //     [e.target.name]: e.target.value,
        // });
        navigate("/dishdetail");
    };

    return (
            <Container fluid className='login_container'>
                <Stack>
                    {dishArray.map((dishObject, index) => {
                        return (
                            <>
                                <Row key={index} onClick={handleClickRow}>
                                    <Col>
                                        <img src={dishObject.imagen} alt="dish" style={{borderRadius:"8%"}} />
                                        <p>{dishObject.name}</p>
                                        <p>${dishObject.price}</p>
                                    </Col>
                                </Row>
                                <hr />
                            </>
                        )
                    })}
                </Stack>
            </Container>
    )
};
export default DishesList;