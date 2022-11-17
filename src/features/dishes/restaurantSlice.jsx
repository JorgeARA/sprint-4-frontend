import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"0",
        imagen:"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantsImg%2Frest2.PNG?alt=media&token=5e9f38f8-dd5f-4d48-a3fd-e7e1ac5ae584",
        descripcion:"Avocado Restaurant",
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