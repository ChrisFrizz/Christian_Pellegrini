/**
 * IN: url: string
 * OUT: 
 *      -dati
 *      -loading
 *      -error
 */

/**
 * Custom hook per il fetch dei dati da un URL
 * @param url - url da cui effettuare il fetch
 * @returns Un oggetto contenente i dati
 */

import { useEffect, useState } from "react";

export default function useFetch<T>(url:string){

    //DATI
    const [data, setData] = useState<T>();
    //Errori
    const [error, setError] = useState<string>();
    //Load
    const [loading, setLoading] = useState<boolean>();

    async function getData(){
            setLoading(true);
            try{
                const res = await fetch(url);
    
                if(!res.ok){
                throw new Error("Errore nel recupero dei dati");
                }
    
                const data: T = await res.json();
    
                setData(data);
            }catch(err: any){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }

    useEffect(()=>{
            getData();
        }, []);
    

    return {data, loading, error}

}