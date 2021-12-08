const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('180042107')
})

app.listen(port, () => {
  console.log(`Al Muhtasim Srijon`)
})

