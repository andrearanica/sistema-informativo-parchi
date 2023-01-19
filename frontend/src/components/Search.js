import { useState, useEffect } from 'react'
import axios from 'axios'
import Data from './Data'

function Search () {

    const [parks, setParks] = useState([])
    const [selectedPark, setSelectedPark] = useState('')
    const [species, setSpecies] = useState([])
    const [selectedSpecie, setSelectedSpecie] = useState('')
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/info/parks')
        .then(res => setParks(res.data.result))
        if (selectedPark != '') {
            axios.get(`http://127.0.0.1:8080/info/species/${ selectedPark }`)
            .then(res => setSpecies(res.data.result))
        }
        if (selectedSpecie != '') {
            axios.get(`http://127.0.0.1:8080/info/${ selectedPark }/${ selectedSpecie }`)
            .then(res => setData(res.data.result))
        }
    }, [selectedPark, selectedSpecie])

    return (
        <div className="container my-4" id="divTitle">
            <h1>🔎 Ricerca</h1>
            <select className="form-control my-1" onChange={ e => { setSelectedPark(e.target.value); setSelectedSpecie('') } }>
                <option hidden disabled selected defaultValue=''>Seleziona un parco</option>
                {
                    parks.map(p => <option defaultValue={ p.nome_parco }>{ p.nome_parco }</option>)
                }
            </select>
            <hr />
            <select className="form-control my-1" onClick={ e => { setSelectedSpecie(e.target.value) } }>
                <option hidden disabled selected defaultValue=''>Seleziona una specie</option>
                { 
                    species.map(s => <option defaultValue={ s.nome_specie }>{ s.nome_specie }</option>)
                }
            </select>
            <hr />
            { data !== { } ? <Data selectedPark={ selectedPark } selectedSpecie={ selectedSpecie } data={ data }/> : null }
        </div>
    )

}

export default Search