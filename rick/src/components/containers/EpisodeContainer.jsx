import { useEffect, useState } from "react"
import { fetchEpsodes } from "../api";

export const EpisodesContainer = () =>{
    const [episodes, setEpisodes] = useState([]);
    useEffect(()=>{
        fetchEpsodes().then((data)=>{
            setEpisodes(data);
        });
    },[]);

    return <EpisodeList episodes={episodes}/>
}