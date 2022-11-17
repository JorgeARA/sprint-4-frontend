import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from '../components/Generic/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, 
         signOut, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, sendPasswordResetEmail } 
         from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";


export const firebaseContext = createContext();

export const useAuth = () => {
    const context = useContext(firebaseContext)
    if(!context) throw new Error('No hay context provider')
    return context
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fakeDataRestaurants = [
        {id:0, description:"Pardes Restaurant", image:"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantsImg%2Frest1.PNG?alt=media&token=8d0baf0b-4788-4511-89b4-c7941ccac823", numStars:"4", workTime:"Work time 09:30 - 23:00", beforeyou:"4$"}, 
        {id:1, description:"Glamour Kafe", image:"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantsImg%2Frest2.PNG?alt=media&token=5e9f38f8-dd5f-4d48-a3fd-e7e1ac5ae584", numStars:"3", workTime:"Work time 09:00 - 21:00", beforeyou:"13$"}, 
        {id:2, description:"Aromat Bakery", image:"https://firebasestorage.googleapis.com/v0/b/sprint4-61808.appspot.com/o/restaurantsImg%2Frest3.PNG?alt=media&token=7bd78473-efe8-4221-b121-d2a761a72b11", numStars:"5", workTime:"Work Time 09:00 - 22:00", beforeyou:"3$"}, 
    ];

    const fakeDataDishes = [
        {id:1, name: "Bolognese Salad", description: "Best salad of the world 1!", price: 14.45, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}, 
        {id:2, name: "Salad with shrimp", description: "Best salad of the world 2!", price: 19.05, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}, 
        {id:3, name: "Caesar salad without sauce", description: "Best salad of the world 3!", price: 17.45, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}, 
        {id:4, name: "Fresh with funcheza", description: "Best salad of the world 4!", price: 14.45, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}, 
        {id:5, name: "Fruit salad", description: "Best salad of the world 5!", price: 12.45, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}, 
        {id:6, name: "Vegetable salad", description: "Best salad of the world 6!", price: 13.45, image: "https://www.hotelportonmedellin.com/cache/1a/45/1a45a7ed6dfb3790b9a288c9972f4624.jpg"}
    ];

    //Registro
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    //Login
    const login = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    }

    //Logout
    const logout = () => signOut(auth);

    //Login with Google
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    //Login with Facebook
    const loginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider);
    }

    //ResetPassword
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    }

    //Find Restaurants
    const findRestaurants =  async () => {
        const docuRef = doc(firestore, `restaurantsDb/items`);
        const queryDoc =  await getDoc(docuRef);
        if(queryDoc.exists()) {
            const infoDocu = queryDoc.data();
            return infoDocu.restaurants;
        } else {
            await setDoc(docuRef, {restaurants: [...fakeDataRestaurants]});
            const queryDoc =  await getDoc(docuRef);
            const infoDocu = queryDoc.data();
            return infoDocu.restaurants;
        }
    }

    //Find Dishes
    const findDishes =  async (restaurantId) => {
        const docuRef = doc(firestore, `restaurantsDb/${restaurantId}`);
        const queryDoc =  await getDoc(docuRef);
        if(queryDoc.exists()) {
            const infoDocu = queryDoc.data();
            return infoDocu.dishes;
        } else {
            await setDoc(docuRef, {dishes: [...fakeDataDishes]});
            const queryDoc =  await getDoc(docuRef);
            const infoDocu = queryDoc.data();
            return infoDocu.dishes;
        }
    }

    useEffect(() => {
        const unsusbcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsusbcribe();
    }, [])

    return (
        <firebaseContext.Provider value={{signup, login, user, logout, loading, 
            loginWithGoogle, loginWithFacebook, resetPassword, findRestaurants, findDishes}}>
            {children}
        </firebaseContext.Provider>
    )
}