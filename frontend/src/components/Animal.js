function Animal (props) {
    return (
        <div>
            Nome: <b>{ props.animal.nome_animale }</b><br />
            Età: { new Date().getFullYear() - new Date(props.animal.dataDiNascita).getFullYear() } anni
        </div>
    )
}

export default Animal