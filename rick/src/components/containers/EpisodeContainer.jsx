import { useEffect, useState } from "react"
import { fetchEpsodes } from "../api"
import { EpisodeList } from "../presentational/EpisodeList";


export const EpisodeContainer = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(()=>{
        fetchEpsodes().then((data)=>{
            setEpisodes(data);
        });
    },[]);

    return <EpisodeList episodes={episodes}/>
};