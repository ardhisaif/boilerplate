import db from '../config/connection.js'

export default {
  async getUserByID(userID) {
    try {
      const query = `
        SELECT id, username, email FROM users WHERE id = ?
      `
      
      const [data] = await db.query(query, [userID])
      
      return data[0]
    } catch (error) {
      throw error
    }
  },

  async getUserByUsername(username) {
    try {
      const query = `
      SELECT id, username, email, password FROM users WHERE username = ?
    `
      const [data] = await db.query(query, [username])

      return data[0]
    } catch (error) {
      throw error
    }
  },

  async getUserByEmail(email) {
    try {
      const query = `
      SELECT id, username, email, password FROM users WHERE email = ?
    `
      const [data] = await db.query(query, [email])
      return data[0]
    } catch (error) {
      throw error
    }
  },

  async registerUser({ username, email, password }) {
    try {
      const params = [username, email, password]
      const query = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?);
      `
      const [result] = await db.query(query, params)

      return result.insertId
    } catch (error) {
      throw error
    }
  },

  
}
