import mysql from 'promise-mysql';


const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0423',
    database: 'apliweb'
});
export default pool;
