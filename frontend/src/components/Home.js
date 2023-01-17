import { Link } from 'react-router-dom'

function Home () {
    return (
        <div>
            <div className="container my-4" id="divTitle">
                <h1 id="title">🌱 Sistema Informativo Nazionale dei Parchi</h1><hr />
                <h5>La nuova web app per controllare gli animali dei parchi nazionali italiani</h5>
                <div className="row my-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cerca tutte le specie 🐺</h5>
                            <p className="card-text">Scopri nuove specie grazie al database contenente tutti gli animali dei parchi</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Visualizza le specie a rischio di estinzione ⚠️</h5>
                            <p className="card-text">Scopri quali sono le specie più sensibili</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">🐢 Visita i parchi più vicini a te</h5>
                            <p className="card-text">E scopri posti che non conoscevi vicino a casa</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Scopri tutte le statistiche ⚙️</h5>
                            <p className="card-text">Queste e altre funzioni sono disponibili per tutti senza registrazione</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card" id="search">
                    <div className="card-body">
                        <h5 className="card-title"><Link style={{ color: 'white' }} to="/search">Apri la funzione di ricerca 🔎</Link></h5>
                        <p className="card-text">Ed inizia a scoprire</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home