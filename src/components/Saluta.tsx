import type { JSX } from "react";

interface ISalutaProp{
    nome: string;
    cognome: string;
    eta?: number;
    email?: string;
    cf?: string;
    studente?: boolean;
}

function Saluta({nome, cognome, cf, eta, email}:ISalutaProp){

    function checkCF(): JSX.Element{ //più di 2 controlli? fai funzione
        if(!(cf?.length === 16)) return (<p>CF non valido</p>)
        
        //TANTI CONTROLLI

        return (<p>CF è valido: {cf}</p>)
    }

    return(
        <div>
            <h1>Ciao a {nome + cognome}</h1>
            {checkCF()}
            <p>Studente: {eta}</p>


            {email !== undefined ? //{TS} (JSX)
                (<p>Email presente: {email}</p>) : 
                (<p>Email non presente</p>)}
        </div>
        
    );
}

export default Saluta;