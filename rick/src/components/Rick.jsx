import { useEffect, useState } from "react";
import { fetchEpsodes, fetchCharacters } from "./api";
import "./Rick.css";

export const Rick = () => {
    const [episodes, setEpisodes] = useState([]);
    const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
    
    useEffect(()=>{
     fetchEpsodes().then((data)=>{
        console.log(data);
        setEpisodes(data);
     }
     );   
    }, []);

    const hadleEpisodeClick = (episodes) =>{
        const ids = episodes.characters.map((character)=>{
            const id = character.split("/").pop();
            return id;
        });
        fetchCharacters(ids).then((data)=>{
            console.log(data);
            setCharactersByEpisodes({...charactersByEpisodes,[episodes.id]: data })
        });
    };


return (
    <div>
        {episodes.map((episode) => (
            <div 
                key={episode.id} 
                className="episode" 
                onClick={() => handleEpisodeClick(episode)}
            >
                <h1>{`${episode.episode}: ${episode.name}`}</h1>
                <div>
                    {charactersByEpisodes[episode.id]?.map((character) => (
                        <div key={`${episode.id}-${character.id}`}>
                            {character.name}
                        </div>
                    ))}
                </div>
                <p>{episode.air_date}</p>
            </div>
        ))}
    </div>
)