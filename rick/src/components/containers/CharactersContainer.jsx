import { useEffect, useState } from "react"
import { fetchCharacters } from "../api";
import { CharacterList } from "../presentation/CharacterList";

export const CharacterContainer = ({ids})=>{
 const [characters, setCharacters] = useState([]);
 const [isloading, setIsLoading] = useState(true);

 useEffect(()=>{
    setIsLoading(true);
    fetchCharacters(ids).then((data)=>{
        console.log(data);
        setCharacters(data);
        setIsLoading(false);
    });
 },[ids]);

 return<CharacterList characters={characters} isloading={isloading} />;

 
};