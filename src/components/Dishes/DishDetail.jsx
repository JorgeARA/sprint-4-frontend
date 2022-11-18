import React, { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { BsPlus} from "react-icons/bs";
import { BiMinus } from "react-icons/bi";


export const DishDetail = () => {

    let [ count, setCount ] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }

    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

    return(
        <div className='login_container'>
            <img src={"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantDishes%2Ffuncheza.jpg?alt=media&token=c108e4d2-364c-4dbb-8924-e3de3c5a13e0"} alt="dish" style={{borderRadius:"8%"}} />
            <p>Nombre</p>
            <p>Descripcion</p>

            <div>
                <Button variant="warning" onClick={decrementCount}><BiMinus /></Button>
                <div>{count}</div>
                <Button variant="warning" onClick={incrementCount}><BsPlus /></Button>
            </div>

            <div>
                <Button variant="warning" disabled>Add</Button>
                <Button variant="warning" >$</Button>
            </div>


        </div>
    )
};
export default DishDetail;