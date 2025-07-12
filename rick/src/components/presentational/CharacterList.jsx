import { CharacterItem } from "./characterItem"

export const CharacterList = ({ character, isLoading }) =>{
    if (isLoading){
        return <div className="loading">Загрузка...</div>
    }
    return(
    <div className="chararactres-container">
        {characters.map((character)=>(<CharacterItem key={character.id} character={character}/>) 
        
        )}

    </div>)
}