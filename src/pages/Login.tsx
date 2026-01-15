import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ILoginNavigateState{
    username: string;
}

export default function Login(){
    
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault(); //previene il refresh della pagina
        console.log("Form inviata");


        navigate(`/dashboard`, {state:{username: username} as ILoginNavigateState});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="Inserisci nome utente o email"
                value={username}
                onChange={(event)=>{
                    setUsername(event.target.value)}
                }
            />
            <p>username: {username}</p>
            <button type="submit">Login</button>
        </form>
    );
}