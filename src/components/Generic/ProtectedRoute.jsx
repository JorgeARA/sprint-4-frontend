import {useAuth} from "../../context/firebaseContext";
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({children}){

    const {user, loading} = useAuth();

    if(loading) return (
        <div class="spinner-border text-warning"  role="status">
            <span class="visually-hidden">Loading...</span>
        </div>)
    
    if(!user) return <Navigate to='/login'></Navigate>

    return <>{children}</>
}