import { useEffect, useState } from "react"

export type TPosts = IPost[];

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export default function PostList(){
    
    //Post
    const [posts, setPost] = useState<TPosts>([]);
    //Errori
    const [error, setError] = useState();
    //Load
    const [loading, setLoading] = useState(false);
    
    async function getPosts(){
        setLoading(true);
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');

            if(!res.ok){
            throw new Error("Errore nel recupero dei post");
            }

            const data: TPosts = await res.json();

            setPost(data);
        }catch(err: any){
            setError(err.message);
            setPost([]);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getPosts();
    }, []);

    if(loading) return <h3>Caricamento in corso</h3>
    if(error) return <h3>Si è verificato un errore: {error}</h3>

    return(
        
        <div>
            <h1>Post Page List</h1>
            <button onClick={getPosts}>Carica Post</button>
            {posts.length === 0 && <p>Ancora nessun post disponibile</p>}
            <ul>
                {
                    posts.map((post: IPost)=>{
                        return(
                            <li>
                                {post.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}