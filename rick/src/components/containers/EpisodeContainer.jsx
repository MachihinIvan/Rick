import { useEffect, useState } from "react"
import { fetchEpsodes } from "../api";
import { EpisodeList } from "../presentation/EpisodeList";

export const EpisodeContainer = () => {

    const [episode, setEpisodes] = useState([])

    useEffect (()=>{
        fetchEpisodes().then((data)=>{
            setEpisodes(data);
        });
    },[])

    return<EpisodeList episodes={episodes}/>
}