import { useEffect, useState } from "react"
import { fetchEpsodes } from "../api";
import {EpisodeList} from "../presentation/EpisodeList"

export const EpisodesContainer = () =>{
    const [episodes, setEpisodes] = useState([]);
    useEffect(()=>{
        fetchEpsodes().then((data)=>{
            setEpisodes(data);
        });
    },[]);

    return <EpisodeList episodes={episodes}/>
}