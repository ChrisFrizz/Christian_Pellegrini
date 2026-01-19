
import { useState } from "react";
import Searchbar from "../components/Searchbar";
import SearchResultList from "../components/SearchResultList";

export default function Classes(){
    
    const[results, setResults] = useState([]);
    return (
        <div className="Classes">
            <div className="classes-searchbar">
                <Searchbar setResults={setResults} />
                <SearchResultList results={results} />
            </div>
        </div>
    )
}
