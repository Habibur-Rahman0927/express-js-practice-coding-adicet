const express = require('express');
const app = express();
let { people } = require('./data')

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {

        return res.status(400).json({ success: false, msg: 'please provid your information' })
    }
    res.status(201).send({ success: true, person: name })

})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;

    if (!name) {

        return res.status(400).json({ success: false, msg: 'please provid your information' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // console.log(id, name);
    const person = people.find((person) => person.id === Number(id));
    if (!person) {

        return res.status(400).json({ success: false, msg: 'please provid your information' })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {

    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(400).json({ success: false, msg: 'please provid your information' })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople })
})
app.post('/login', (req, res) => {
    // console.log(req.body)
    const { name } = req.body;
    if (name) {

        return res.status(200).send(name);
    }
    return res.status(201).send('please provid your information')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resouce not Found</h1>')
})
app.listen(5000, () => console.log(`The server is listening on port 5000...`))
