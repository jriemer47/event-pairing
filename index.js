const express = require('express')
const port = 3000
const app = express()

let events = [
  {
    uid: 1,
    title: 'Birthday Party',
    description: 'First birthday party',
    date: 'July 8th',
    time: '10pm-10am'
  }
]

app.get('/events', (req, res) => {
  console.log('GET is working!')
  res.send(events)
})

app.listen(port, () => console.log('HELLOOOOOO'))
