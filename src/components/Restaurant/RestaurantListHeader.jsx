import React from 'react';
import { Carousel, DropdownButton, Dropdown, Nav } from 'react-bootstrap';
import { FcShop, FcLike } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";


export const RestaurantListHeader = () => {
    return (
        <>
            <DropdownButton id="dropdown-item-button" title="82 Well St, New-York" 
                style={{ marginBottom:"2%"}}
                variant="light">
                    <Dropdown.Item><GrLocation /> 12 - 82 8th Street</Dropdown.Item>
                    <Dropdown.Item as="button"><GrLocation /> 46 - 23 8th Street </Dropdown.Item>
            </DropdownButton>

            <Carousel className='margins'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantBanners%2Fspecial-opening-offer.png?alt=media&token=f28607c7-eb90-4c5d-ae1b-1a0bda0a2ad1"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantBanners%2Flanding-banner-co-1.png?alt=media&token=1efa7974-bfa9-4e8f-b305-8a3ca51c5a7e"
                        alt="Second slide" />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantBanners%2Flanding-banner-co-2.png?alt=media&token=a955e74d-913f-48a7-bf2b-5d192c48c60e"
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h3></h3>
                        <p>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h4 style={{ marginTop:"2%", marginBottom:"2%"}}> Restaurants and cafes </h4>

            <Nav variant="pills" defaultActiveKey="/home" className="margins">
            <Nav.Item style={{ backgroundColor:"#C6C642"}}> </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">All</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="link-1"><FcShop /> Fast food</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="link-2"><FcLike /> Pizza</Nav.Link>
                </Nav.Item>
            </Nav> 
        </>
    )
};
export default RestaurantListHeader;
