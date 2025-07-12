import { useEffect, useState } from "react"
import { fetchCharacters } from "../api";
import { CharacterList } from "../presentational/characterList";

export const CharacterContainer = ({ ids }) => {
    const [characer, setCharacer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
         fetchCharacters(ids).then((data)=>{
            console.log(data);
            setCharacers(data);
            setIsLoading(false);      
        });
    },[ids])

    return <CharacterList characters={characers} isLoading={isLoading} />;
    
}