/*Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità
sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo,
contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare
le immagini associate ad ogni post.
Testare su postman
Buon lavoro!*/

const express = require("express");

const app = express();

const port = 3000;

const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.type('html').send(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Blog</title>
            </head>
            <body>
            <h1>Server del mio blog</h1>
            </body>
        </html> `
    )
});

app.use("/api/post", postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });