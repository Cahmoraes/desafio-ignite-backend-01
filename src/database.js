import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => this.#persist())
  }

  insert(table, data) {
    const databaseTable = this.#database[table] ?? []
    databaseTable.push(data)
    this.#database[table] = databaseTable
    this.#persist()
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database), 'utf-8')
  }
}
