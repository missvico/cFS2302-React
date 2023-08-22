import {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination'
function StarWarsCharacters(){
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCharacters, setTotalCharacters] = useState(0)

    useEffect(
        function(){
            setLoading(true)
            axios({
                method: 'GET',
                url: `https://swapi.dev/api/people/?page=${currentPage}`
            }).then(
                response => {
                    setCharacters(response.data.results)
                    setTotalCharacters(response.data.count)
                    setLoading(false)
                    
                }
            )
        }
    ,[currentPage])

    console.log(characters)

    return(
        <section>
            <h1>Star Wars</h1>
            {
                loading ? 
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalCharacters={totalCharacters}/>
                {characters.map(character=>{
                    return <CharacterCard character={character} />
                })}
                </>
            }
        </section>
    )
}

export default StarWarsCharacters;

//https://swapi.dev/api/people