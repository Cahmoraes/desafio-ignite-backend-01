import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    path: '/tasks',
    method: 'GET',
    async handler(req, res) {
      return res.end('ok')
    },
  },
  {
    path: '/tasks',
    method: 'POST',
    async handler(req, res) {
      database.insert('tasks', req.body)
      return res.writeHead(201).end()
    },
  },
]
