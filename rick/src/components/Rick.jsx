import { useEffect, useState } from "react";
import { fetchEpsodes, fetchCharacters } from "./api";
import "./Rick.css";

export const Rick = () => {
    const [episodes, setEpisodes] = useState([]);
    const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
    const [isLoadingEpisodes, setisLoadingEpisodes] = useState({})
    
    useEffect(()=>{
     fetchEpsodes().then((data)=>{
        console.log(data);
        setEpisodes(data);
     }
     );   
    }, []);

    const handleEpisodeClick = (episodes) =>{
        const ids = episodes.characters.map((character)=>{
            const id = character.split("/").pop();
            return id;


        });

        setisLoadingEpisodes({...isLoadingEpisodes, [episodes.id]:true})

        fetchCharacters(ids).then((data)=>{
            console.log(data);
            setCharactersByEpisodes({...charactersByEpisodes,[episodes.id]: data });
            setisLoadingEpisodes({...isLoadingEpisodes, [episodes.id]:false})
        });
    };

    

    const getStatusClass = (status) => {
        switch(status){
            case "Alive":
                return "characer-alive";
            case 'Dead':
                return'characer-dead';
            default:
                return"characer-unknown"
            
        }
        
    }


return (
    <div>
        {episodes.map((episode) => (
            <div 
                key={episode.id} 
                className="episode" 
                onClick={() => handleEpisodeClick(episode)}
            >
                <h1>{`${episode.episode}: ${episode.name}`}</h1>
                <div className="chararactres-container">
                    {isLoadingEpisodes[episode.id] && (
                        <div className="loading">Загрузка...</div>
                    )}
                    {charactersByEpisodes[episode.id]?.map((character) => (
                        <div key={`${episode.id}-${character.id}`} className={"character " + getStatusClass(character.status)}>
                            <div className="character-left">
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div className="character-right">
                                <h3>{character.name}</h3>
                                <div>Вид:{character.species}</div>
                                <div>Пол:{character.gender}</div>
                                <div>Локация:{character.location.name}</div>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
                <p>{episode.air_date}</p>
            </div>
        ))}
    </div>
)
}