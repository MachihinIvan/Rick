export const fetchEpsodes = () => {
    return fetch("https://rickandmortyapi.com/api/episode")
    .then((response)=> response.json())
    .then((data)=>{
        return data.results
    })  
}


export const fetchCharacters = (ids) => {
    return fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`)
    .then((response)=> response.json())
     
}