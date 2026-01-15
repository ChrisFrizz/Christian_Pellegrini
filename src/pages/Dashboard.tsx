import { useLocation, useNavigate, type Location } from "react-router-dom";
import type { ILoginNavigateState } from "./Login";
import { useEffect } from "react";

export default function Dashboard(){

    const location: Location<ILoginNavigateState> = useLocation();
    const navigate = useNavigate();
    
    const username = location.state?.username ?? "Guest";

    useEffect(()=>{
        if (!location.state) navigate("/login");
    }, [location, navigate]);
    
    return <h1>Dashboard page: {username}</h1>;
}