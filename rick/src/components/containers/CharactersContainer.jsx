import { useEffect, useState } from "react"
import { fetchCharacters } from "../api";
import { CharacterList } from "../presentational/characterList";

export const CharacterContainer = ({ ids }) => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
         fetchCharacters(ids).then((data)=>{
            console.log(data);
            setCharacter(data);
            setIsLoading(false);      
        });
    },[ids])

    return <CharacterList character={character} isLoading={isLoading} />;
    
}