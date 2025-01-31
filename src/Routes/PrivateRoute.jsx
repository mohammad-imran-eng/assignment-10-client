import { useContext } from "react";
import { AuthContext } from "../Providers/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loggedInUser} = useContext(AuthContext);
    if(!loggedInUser){
        return <Navigate state={location.pathname} to='/login'/>
    }

    return children
    
};

export default PrivateRoute;