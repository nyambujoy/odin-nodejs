//server
console.log('hello');


const express = require('express');
const path = require('path');
const app = express()
const PORT = 8080;

// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'))
});

//404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})




app.listen(PORT, () => { console.log(`${PORT} is running`) });

