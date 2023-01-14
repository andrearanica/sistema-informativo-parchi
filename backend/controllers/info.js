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
    connection.query(`SELECT * FROM animali WHERE id_animale=${ req.params.id }`, (err, result, fields) => {
        if (err) { 
            res.json({ message: err.message })
        } else {
            if (result.length > 0) {
                res.json({ result: result[0] })
            } else {
                res.json({ result: 'Animal not found' })
            }
        }
    })
}