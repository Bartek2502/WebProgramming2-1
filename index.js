const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.get('/', (req, res) => res.send('Hello World from Bartek!'))

app.get('/bananas', (req, res) => res.send('hello world, this is bananas'));

app.get('/secret', (req, res) => res.send('Goodbye world from 3rd year'))

app.get('/chaos', (req, res) => res.send('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa!'))

let books = [];

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);

    res.send ('book has been added to the database');
    console.log(`book name is ${book.name} number of book is ${books.length}`);

});

app.get('/books', (req, res) => {
    res.send(books);
})
app.get('/books/:id', (req,res) => {

    let id = req.params.id;
     res.json(books[id]);
 })
 app.delete('/books/:id',(req, res) =>
 {
    let id = req.params.id; 
    console.log(`removing book ${books[id].name}`)
    books.splice(req.params.id, 1);
    res.send(books);

  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


