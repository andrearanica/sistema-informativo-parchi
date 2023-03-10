import axios from 'axios'
import { useState, useEffect } from 'react'

function Data (props) {

    const [count, setCount] = useState(undefined)
    const [average, setAverage] = useState(undefined)

    useEffect(() => {
        setCount(undefined)
        setAverage(undefined)
        if (props.selectedPark !== '' && props.selectedSpecie !== '') {
            axios.get(`http://127.0.0.1:8080/info/${ props.selectedPark }/${ props.selectedSpecie }/count`)
            .then(res => setCount(res.data.result))

            axios.get(`http://127.0.0.1:8080/info/${ props.selectedPark }/${ props.selectedSpecie }/averageAge`)
            .then(res => setAverage(res.data.result))
        }
    }, [props.selectedPark, props.selectedSpecie])
    return (
        <div>
            <h4>⚙️ Risultati della ricerca</h4>
            <table id="animalTable" className="my-2">
                { count > 0 ? <tr><th>Nome</th><th>Sesso</th><th>Stato di salute</th><th>Anno di nascita</th><th>Adulto / cucciolo</th></tr> : null }
                { props.data[0] !== undefined && count > 0 ? props.data.map(d => <><tr><td>{ d.nome_animale }</td><td>{ d.sesso }</td><td>{ d.statoSalute }</td><td>{ d.dataDiNascita.toString().slice(0, 10) }</td><td>{ d.adulto.data[0] == 1 ? <p>Adulto</p> : <p>Cucciolo</p> }</td></tr></>) : null }
             </table>
            { count   !== undefined ? count !== 0 ? <p>Numero di esemplari: { count }</p> : <p>Nessun esemplare di questa specie è presente in questo parco</p> : <p>Seleziona una specie dal form qui sopra per vedere le informazioni</p> }
            { average !== undefined ? <p>Età media: { average } anni</p> : null }
        </div>
    )
}

export default Data