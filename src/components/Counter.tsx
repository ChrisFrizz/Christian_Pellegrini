import { useState } from "react";


function Counter(){

    const[counter, setCounter] = useState<number>(0); //hook di react, ritorna il valore effettivo e una funzione che usi per aggiornare il valore

    return(
        <div>
            <h1>Contatore: {counter}</h1>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>
            <button onClick={()=>{setCounter(0)}}>Reset</button>
        </div>
    )
}

export default Counter;