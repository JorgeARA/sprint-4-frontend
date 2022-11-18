import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"0",
        imagen:"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantsImg%2Frest1.PNG?alt=media&token=8d0baf0b-4788-4511-89b4-c7941ccac823",
        descripcion:"Pardes Restaurant",
        descripcionFull: "We transmit HAPPINESS to your palate, through essences and flavors from the bowels of Colombia.",
        numStars:"4",
        workTime:"Work time 09:30 - 23:00",
        beforeyou:"4$",
        shippingTime:"15-20 min"
    }
]

export const restaurantSlice = createSlice({
      name: 'restaurants',
      initialState: initialState,
      reducers: {

      }
});

export default restaurantSlice.reducer;