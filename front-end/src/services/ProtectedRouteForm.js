import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const tokenLocalStorage = localStorage.getItem('token')
    return !tokenLocalStorage ? <Outlet/> : <Navigate to={"/getallpost"}/>;
};

export default ProtectedRoute;