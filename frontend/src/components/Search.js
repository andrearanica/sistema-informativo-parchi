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
    }, [])

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

    function searchSpecies () {
        axios.get(`http://127.0.0.1:8080/info/species/${ 'Parco delle Cornelle' }`)
        .then(res => console.log(res))
    }

    return (
        <div className="container my-4" id="divTitle">
            <h1>🔎 Ricerca</h1>
            { /*
            <select className="form-control my-1">
                {
                    parks.map(p => <option>{ p.nome_parco }</option>)
                }
            </select>
            <form role="search" onSubmit={ searchAnimal }>
                <input class="form-control" type="search" placeholder="Cerca" aria-label="Search" onChange={ e => setResearch(e.target.value) } />
                <button class="btn bg-light my-1" type="submit">Cerca per ID</button>
            </form>
            <hr />
            { result ? <Animal animal={ result } /> : null }
            */ }
            <select className="form-control my-1" onChange={ e => { setSelectedPark(e.target.value); console.log(e.target.value); } }>
                <option value=''>Seleziona un parco</option>
                {
                    parks.map(p => <option value={ p.nome_parco }>{ p.nome_parco }</option>)
                }
            </select>
            { selectedPark !== '' && species === [] ? searchSpecies() : null }
            { species !== [] ? console.log(species) : null }
        </div>
    )

}

export default Search