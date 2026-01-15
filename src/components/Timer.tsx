import { useEffect, useState } from "react";

export default function Timer(){
    const [sec, setSec] = useState<number>(0);

    useEffect(()=> {
        const timerID = setInterval(()=>{
            
            console.log("Timer: ", sec);
            setSec(s => s+1);
        }, 1000);

        return () => clearInterval(timerID);
    }, [sec]);

    return <p>Secondi: {sec}</p>
}