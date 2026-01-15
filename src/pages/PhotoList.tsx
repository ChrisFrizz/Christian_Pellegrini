import { useQuery } from "@tanstack/react-query"
import type { TCatsImageList } from "../hook/Cats";


export default function PhotoList(){
    
    const {data, isLoading, error} = useQuery<TCatsImageList>({
        queryKey: ['photos'],
        queryFn: async ()=> await fetch("https://cataas.com/api/cats?tags=cute")
            .then(data => data.json())
    });

    if(isLoading) return <h3>Caricamento in corso</h3>
    if(error) return <h3>Si è verificato un errore: {error.message}</h3>

    return (
        <div>
            {data && data.map(photo =>{
                return(
                    <div key={photo.id} style={{marginBottom: '20px'}}>
                        <h4>{photo.id}</h4>
                        <img src={photo.createdAt} /> 
                    </div>
                )
            })}
        </div>
    )
}