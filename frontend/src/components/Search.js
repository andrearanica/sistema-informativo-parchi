import { useState, useEffect } from 'react'
import axios from 'axios'

function Search () {

    const [research, setResearch] = useState('')
    const [result, setResult] = useState({})
    const [parks, setParks] = useState([])

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

    return (
        <div className="container my-4" id="divTitle">
            <h1>🔎 Ricerca</h1>
            <select className="form-control my-1">
                {
                    parks.map(p => <option>{ p.nome_parco }</option>)
                }
            </select>
            <form role="search" onSubmit={ searchAnimal }>
                <input class="form-control" type="search" placeholder="Cerca" aria-label="Search" onChange={ e => setResearch(e.target.value) } />
                <button class="btn bg-light my-1" type="submit">Cerca per ID</button>
            </form>
            { result.dataDiNascita ? <p>{ result.dataDiNascita }</p> : null }
        </div>
    )

}

export default Search