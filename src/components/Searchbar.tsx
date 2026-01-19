import {FaSearch} from "react-icons/fa";
import './Searchbar.css'
import { useState } from "react";

export default function Searchbar(setResults: any){ {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch("https://www.dnd5eapi.co/api/2014/classes").
        then((response) => response.json()).
        then((json) => {
            const results = json.results.filter((index: string) => {
                return (
                    value && 
                    index && 
                    index.toUpperCase().includes(value)
                );
            });
            setResults({results});
        });

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="input-wrapper">Searchbar
            <FaSearch id="search-icon" />
            <input placeholder="Search a class..." 
            value={input} 
            onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
}
}
}