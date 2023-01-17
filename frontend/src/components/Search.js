import { useState, useEffect } from 'react'
import axios from 'axios'

function Search () {

    const [research, setResearch] = useState('')
    const [result, setResult] = useState({})
    const [parks, setParks] = useState([])
    const [selectedPark, setSelectedPark] = useState('')
    const [species, setSpecies] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/info/parks')
        .then(res => setParks(res.data.result))
        if (selectedPark != '') {
            axios.get(`http://127.0.0.1:8080/info/species/${ selectedPark }`)
            .then(res => setSpecies(res.data.result))
        }
    }, [selectedPark])

    function searchAnimal (e) {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8080/info/${ research }`)
        .then(res => {
            if (res.data.result !== 'Animal not found') {
                setResult(res.data.result)
            }
        })
        .catch(setResult({}))
    }

    return (
        <div className="container my-4" id="divTitle">
            <h1>🔎 Ricerca</h1>
            <select className="form-control my-1" onChange={ e => { setSelectedPark(e.target.value) } }>
                <option hidden disabled selected defaultValue=''>Seleziona un parco</option>
                {
                    parks.map(p => <option defaultValue={ p.nome_parco }>{ p.nome_parco }</option>)
                }
            </select>
            <hr />
            <h4>Specie nel { selectedPark }</h4>
            { 
                species.map(s => <p>{ s.nome_specie }</p>)
            }
        </div>
    )

}

export default Search