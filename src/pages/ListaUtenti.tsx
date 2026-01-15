import type { IListaUtenti, IUtente } from "../hook/TUtenti";
import useFetch from "../hook/useFetch"
import type { TPosts } from "../pages/PostList";

export default function ListaUtenti(){
    
    const {data, loading, error} = useFetch<IListaUtenti>("https://jsonplaceholder.typicode.com/users");
    const {} = useFetch<TPosts>("https://jsonplaceholder.typicode.com/posts");

    if(loading) return <h3>Caricamento in corso</h3>
    if(error) return <h3>Si è verificato un errore: {error}</h3>

    return(         
        <ul>
            {data && data.map((u:IUtente)=>{
                return (
                    <li key ={u.id}>
                        {u.id}:{u.name}
                    </li>
                )
            })
            }
        </ul>
    )
}