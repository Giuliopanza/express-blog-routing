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

app.get("/bacheca", (req, res) => {


    const post = [
        {
            titolo: "Ciambellone",
            contenuto: "Il ciambellone è un dolce soffice e genuino, perfetto per la colazione o la merenda. Preparato con ingredienti semplici come uova, farina, zucchero e latte, può essere arricchito con vaniglia, limone o cacao.",
            image: "img/ciambellone.jpeg",
            tags: ["dolce", "colazione", "ciambellone", "soffice", "tradizione"]
        }, {
            titolo: "Cracker Barbabietola",
            contenuto: "I cracker alla barbabietola sono uno snack croccante e salutare, dal colore vivace e dal gusto leggermente dolce. Ottimi da servire con hummus, formaggi o salse.",
            image: "img/cracker_barbabietola.jpeg",
            tags: ["snack", "healthy", "barbabietola", "cracker", "croccante"]
        }, {
            titolo: "Pane Fritto Dolce",
            contenuto: "Il pane fritto dolce è una golosità semplice e irresistibile. Fette di pane vengono immerse in latte e uova, fritte e spolverate con zucchero e cannella, perfette per una merenda golosa.",
            image: "img/pane_fritto_dolce.jpeg",
            tags: ["dolce", "pane", "fritto", "tradizione", "facile"]
        }, {
            titolo: "Pasta Barbabietola",
            contenuto: "Un primo piatto dal colore vivace e dal sapore delicato. La pasta alla barbabietola può essere preparata con una crema a base di barbabietola frullata, formaggio cremoso e noci, oppure direttamente con impasto alla barbabietola per un effetto scenografico. Perfetta per stupire a tavola!",
            image: "img/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "ricettacolorata", "primo", "cucinaitaliana"]
        }, {
            titolo: "Torta Paesana",
            contenuto: "Un dolce tradizionale della cucina lombarda, nato per recuperare il pane raffermo. La torta paesana è un mix di latte, cacao, amaretti, pinoli e uvetta, che regala un sapore rustico e avvolgente. Perfetta per la colazione o come dessert casalingo.",
            image: "img/torta_paesana.jpeg",
            tags: ["tortapaesana", "dolcetradizionale", "riciclointelligente", "dessert", "cucinalombarda"]
        }
    ]

    res.json(post)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });