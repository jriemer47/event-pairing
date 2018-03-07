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
  res.send(events)
})

app.get('/events/:uid', (req, res) => {
  if ((req.params.uid < 0 || req.params.uid > events.length - 1) || isNaN(req.params.uid)) {
    res.sendStatus(404)
  } else {
    res.send(events[req.params.uid])
  }
})

app.post('/events', (req, res) => {
  let newEvent = {
    uid: events.length,
    title: 'New Event',
    description: 'This is a new event!!',
    date: '2020',
    time: 'Next decade'
  }
  events.push(newEvent)
  res.send(events)
})

app.put('/events/:uid', (req, res) => {
  events.forEach(function(element, index) {
    if (Number(element.uid) === Number(req.params.uid)) {
      events[index] = {
        uid: Number(req.params.uid),
        title: 'changed event',
        description: 'updating',
        date: 'TBD',
        time: 'TBD'
      }

      res.send(events[req.params.uid])
    }
  })

    res.sendStatus(404)
})

app.delete('/events/:uid', (req, res) => {
  if ((req.params.uid < 0 || req.params.uid > events.length - 1) || isNaN(req.params.uid)) {
    res.sendStatus(404)
  } else {
    res.send(events.splice(req.params.uid, 1))
  }
})

app.listen(port, () => console.log('Listening!'))
