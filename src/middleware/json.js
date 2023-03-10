export async function json(req, res) {
  const buffer = []

  for await (const chunk of req) {
    buffer.push(chunk)
  }

  req.body = JSON.parse(buffer)
  res.setHeader('Content-Type', 'application/json')
}
