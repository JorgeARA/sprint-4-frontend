import React, { useState } from 'react';
import { Container, Stack, Row, Col } from 'react-bootstrap';
import './restaurantlist.css';
import { FcRating } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


export const RestaurantList = ({ arrayRestaurant: restaurantArray }) => {

    const navigate = useNavigate();

    const [ restaurant, setRestaurant ] = useState({
        id: '',
        descripcion: '',
        imagen: '',
        numStars: '',
        workTime: '',
        beforeyou: ''
    })

    const handleClickRow = (restaurantObject) => {
        console.log('restaurantObject');
        console.log(restaurantObject);
        // setRestaurant({
        //     ...restaurant,
        //     [e.target.name]: e.target.value,
        // });
        navigate("/dishes");
    };

    return (
        <>
            <Container fluid className='login_container'>
                <Stack>
                    {restaurantArray.map((restaurantObject, index) => {
                        return (
                            <>
                                <Row key={index} onClick={handleClickRow(restaurantObject)} >
                                    <Col xs={2}><img src={restaurantObject.imagen} alt="restaurant"/></Col>
                                    <Col>
                                        <p className='desc_text'>{restaurantObject.descripcion}</p>
                                        <p className='rating_text'><FcRating /> {restaurantObject.numStars}</p>
                                        <p className='work_time_text'>{restaurantObject.workTime}</p>
                                        <p>Before you <b>{restaurantObject.beforeyou}</b></p>
                                    </Col>
                                </Row>
                                <hr />
                            </>
                        )
                    })}
                </Stack>
            </Container>
            </>
    )
};
export default RestaurantList;