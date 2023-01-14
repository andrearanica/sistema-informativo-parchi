import { useState } from 'react'
import axios from 'axios'

function Search () {

    const [research, setResearch] = useState('')
    const [result, setResult] = useState({})

    function searchAnimal (e) {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8080/info/${ research }`)
        .then(res => {
            if (res.data.result !== 'Animal not found') {
                setResult(res.data.result)
            } else {
                alert(`Nessun animale ha l'id ${ research }`)
            }
            console.log(res)
        })
    }

    return (
        <div className="container my-4" id="divTitle">
            <h1>🔎 Ricerca</h1>
            <form role="search" onSubmit={ searchAnimal }>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ e => setResearch(e.target.value) } />
                <button class="btn btn-outline-success my-1" style={{ color: 'white' }} type="submit">Cerca per ID</button>
            </form>
            { result ? <p>{ result.dataDiNascita }</p> : null }
        </div>
    )

}

export default Search