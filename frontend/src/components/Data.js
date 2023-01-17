import { useState, useEffect } from 'react'

function Data (props) {

    const [validData, setValidData] = useState(false)

    useEffect(() => {
        if (props.data[0] !== undefined) {
            setValidData(true)
        }
    }, [props.data])

    return (
        <div>
            <table id="animalTable" className="my-2">
                <tr><th>Nome</th><th>Sesso</th><th>Stato di salute</th><th>Data di nascita</th></tr>
                { validData ? props.data.map(d => <tr><td>{ d.nome_animale }</td><td>{ d.sesso }</td><td>{ d.statoSalute }</td><td>{ `${ new Date(d.dataDiNascita).getDay() } / ${ new Date(d.dataDiNascita).getMonth() } / ${ new Date(d.dataDiNascita).getFullYear() }` }</td></tr>) : null }
            </table>
        </div>
    )
}

export default Data