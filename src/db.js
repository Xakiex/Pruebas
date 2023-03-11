import {createPool} from 'mysql2/promise'
import {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,    
    password: DB_PASSWORD,
    database: DB_DATABASE
});

/*pool.query('SELECT * FROM employees', (err, result) => {
    console.log(result)
}*/