class DATABASE { 
    /**
     * Create database
     * @param  options - database options
     * @param  options.path - database path
     * @param  options.table - table
     */

    constructor(options){
        this.path  =  typeof options?.path == "string" ? options.path : "./database.sqlite"
        this.table =  typeof options?.table == "string" ? options.table : "json"

        this.db = require("better-sqlite3")(this.path)
        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()

    }
    /**
     * get data
     * @param {string} key 
     * @returns {*} data
     */
    get = (key) => {
        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()

        return JSON.parse(this.db.prepare(`SELECT data FROM ${this.table} WHERE key = '${key}'`).get()?.data || null)
    }
    /**
     * set data
     * @param {string} key 
     * @param {*} value 
     */
    set = (key, value) => {
        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()
        
        this.db.prepare(`DELETE FROM ${this.table} WHERE key = ?`).run(key)
        this.db.prepare(`INSERT INTO ${this.table} (key, data) VALUES (?, ?)`).run(key, JSON.stringify(value))
    }
    /**
     * Set table
     * @param {string} table 
     */
    setTable = (table) => {
        this.table = table

        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()
    }
    /**
     * Check data with key exist
     * @param {String} key
     * @returns {Boolean} 
     */
    exist = (key) => {
        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()

        return Boolean(this.db.prepare(`SELECT * FROM ${this.table} WHERE key = ?`).get(key));
    }
    /**
     * Delete from database
     * @param {string} key 
     * @returns {Boolean}
     */
    delete = (key) => {
        this.db.prepare(`CREATE TABLE IF NOT EXISTS ${this.table} (key, data)`).run()
        
        this.db.prepare(`DELETE FROM ${this.table} WHERE key = ?`).run(key)

        return true
    }
}

/**
* Create database
* @param  options - database options
* @param  options.path - database path
* @param  options.table - table
*/

module.exports = (options) => {
    return new DATABASE (options)
}
module.exports.connection = DATABASE