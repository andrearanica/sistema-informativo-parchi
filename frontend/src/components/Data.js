import axios from 'axios'
import { useState, useEffect } from 'react'

function Data (props) {

    const [validData, setValidData] = useState(false)
    const [count, setCount] = useState(undefined)

    useEffect(() => {
        if (props.selectedPark !== '' && props.selectedSpecie !== '') {
            axios.get(`http://127.0.0.1:8080/info/${ props.selectedPark }/${ props.selectedSpecie }/count`)
            .then(res => setCount(res.data.result))
        }
    }, [props.selectedPark, props.selectedSpecie])
    return (
        <div>
            <h4>⚙️ Risultati</h4>
            <table id="animalTable" className="my-2">
                { props.data[0] !== undefined ? <tr><th>Nome</th><th>Sesso</th><th>Stato di salute</th><th>Data di nascita</th></tr> : null }
                { props.data[0] !== undefined ? props.data.map(d => <><tr><td>{ d.nome_animale }</td><td>{ d.sesso }</td><td>{ d.statoSalute }</td><td>{ `${ new Date(d.dataDiNascita).getDay() } / ${ new Date(d.dataDiNascita).getMonth() } / ${ new Date(d.dataDiNascita).getFullYear() }` }</td></tr></>) : null }
             </table>
            { count !== undefined ? count !== 0 ? <p>Numero di esemplari: { count }</p> : <p>Nessun esemplare di questa specie è presente in questo parco</p> : <p>Seleziona una specie dal form qui sopra per vedere le informazioni</p> }
        </div>
    )
}

export default Data