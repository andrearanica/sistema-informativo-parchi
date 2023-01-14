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