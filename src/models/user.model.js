import db from '../config/connection.js'

export default {
  async getUserByID(userID) {
    try {
      const query = `
        SELECT * FROM users WHERE id = ?
      `
      console.log(userID);
      
      const [data] = await db.query(query, [userID])
      console.log(data);
      
      return data
    } catch (error) {
      throw error
    }
  },

  async getUserByUsername(username) {
    try {
      const query = `
      SELECT id, username, password FROM users WHERE username = ?
    `
      const [data] = await db.query(query, [username])

      return data[0]
    } catch (error) {
      throw error
    }
  },

  async registerUser({ username, password }) {
    try {
      const params = [username, password]
      const query = `
        INSERT INTO users (username, password)
        VALUES (?, ?);
      `
      const [result] = await db.query(query, params)

      return result.insertId
    } catch (error) {
      throw error
    }
  },

  
}
