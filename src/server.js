import http from 'node:http'
import { json } from './middleware/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
  console.log(req.url)
  await json(req, res)

  const route = routes.find(
    (route) => route.method === req.method && route.path.includes(req.url),
  )

  if (route) {
    return route.handler(req, res)
  }

  res.writeHead(404).end()
})

server.listen(3335, () => console.log('Server is initialized'))
