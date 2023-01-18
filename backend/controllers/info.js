import mysql from 'mysql'

export const getAllAnimals = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query('SELECT * FROM animali', (err, result, fields) => {
        if (err) { 
            res.json({ message: err.message })
        } else {
            res.json({ result: result })
        }
    })
}

export const getAnimalById = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT * FROM animali INNER JOIN specie ON animali.id_specie=specie.id_specie WHERE id_animale=${ req.params.id }`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            if (result.length > 0) {
                res.status(200).json({ result: result[0] })
            } else {
                res.status(404).json({ result: 'Animal not found' })
            }
        }
    })
}

export const getAllParks = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT * FROM parchi`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result })
        }
    })
}

export const getSpeciesFromPark = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT * FROM specie INNER JOIN parchi ON specie.id_parco=parchi.id_parco WHERE nome_parco="${ req.params.park }"`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result })
        }
    })
}

export const getSpecieInfo = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT * FROM animali INNER JOIN parchi ON animali.id_parco=parchi.id_parco INNER JOIN specie ON animali.id_specie=specie.id_specie WHERE nome_parco="${ req.params.park }" AND nome_specie="${ req.params.specie }"`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result })
        }
    })
}

export const getAverageAge = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT * FROM animali INNER JOIN parchi ON animali.id_parco=parchi.id_parco INNER JOIN specie ON animali.id_specie=specie.id_specie WHERE nome_parco="${ req.params.park }" AND nome_specie="${ req.params.specie }"`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result })
        }
    })
}

export const count = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(`SELECT COUNT(nome_animale) AS count FROM animali INNER JOIN parchi ON animali.id_parco=parchi.id_parco INNER JOIN specie ON animali.id_specie=specie.id_specie WHERE nome_parco="${ req.params.park }" AND nome_specie="${ req.params.specie }"`, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result[0].count })
        }
    })
}

export const getAge = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sistema-informativo-parchi'
    })
    connection.connect()
    connection.query(``, (err, result, fields) => {
        if (err) { 
            res.status(400).json({ message: err.message })
        } else {
            res.status(200).json({ result: result[0].count })
        }
    })
}