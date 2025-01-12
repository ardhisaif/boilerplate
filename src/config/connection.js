import mysql from 'mysql2';

const db = mysql.createPool({
  host           : process.env.DATABASE_HOST,
  port           : process.env.DATABASE_PORT,
  user           : process.env.DATABASE_USER,
  password       : process.env.DATABASE_PASSWORD,
  database       : process.env.DATABASE,
  timezone       : '+00:00',
  connectionLimit: 2000,
});

db.getConnection((err, connection) => {
  if (err) {
    if (typeof connection !== 'undefined' && connection) {
      connection.release();
    }
    return console.error('error: ' + err.message);
  }
  console.log('Database Connected!');
});

export default db.promise();


(async () => {
  try {
    db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE,
        email VARCHAR(255) UNIQUE,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);

    console.log('Tables created successfully!');
  } catch (err) {
    console.error('Error creating tables:', err.message);
  }
})();
