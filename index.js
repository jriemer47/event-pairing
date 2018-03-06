const express = require('express')
const port = 3000
const app = express()

let events = [
  {
    uid: 0,
    title: 'Birthday Party',
    description: 'First birthday party',
    date: 'July 8th',
    time: '10pm-10am'
  },
  {
    uid: 1,
    title: 'Happy Hour',
    description: 'Drinking event',
    date: 'March 9th',
    time: '5pm-7am'
  }
]

app.get('/events', (req, res) => {
  console.log('GET is working!')
  res.send(events)
})

app.get('/events/:uid', (req, res) => {
  if ((req.params.uid < 0 || req.params.uid > events.length - 1) || isNaN(req.params.uid)) {
    console.log('KEEP TRYING')
    res.sendStatus(404)
  } else {
    res.send(events[req.params.uid])
  }
})

app.listen(port, () => console.log('Listening!'))
