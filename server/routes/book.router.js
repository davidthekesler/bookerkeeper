const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //gets all the books in book table and sends back
    let queryText = `SELECT * FROM book`;
    pool.query(queryText).then( (result) => {
      const responseArray = result.rows;
      res.send(result.rows);
    }).catch( (error) => {
      console.log('error on router.get', error);
    });
  });//end router.get

  router.post('/', (req, res) => {
    console.log('POST /book', req.body);
    const book = req.body;
    const queryText = `INSERT INTO "book" ("author", "title", "date", "image", "genre_id", "score", "favorite") VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(queryText, [book.author, book.title, book.date, book.image, book.genre_id, book.score, book.favorite])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making book insert query', error);
            res.sendStatus(500);
        });
    });//end router.post

    router.put('/:id', (req, res) => {
        console.log('PUT /book', req.body);
        const id = req.params.id;
        const book = req.body;
        const queryText = `UPDATE "book" SET "author" = $1, "title" = $2, "date" = $3, "image" = $4, "genre_id" = $5, "score" = $6, "favorite" = $7 WHERE "id" = $8;
`;
        pool.query(queryText, [book.author, book.title, book.date, book.image, book.genre_id, book.score, book.favorite, id])
            .then(result => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log('error making book put query', error);
                res.sendStatus(500);
            });
        });//end router.put

        router.delete('/:id', (req, res) => {
            //deletes a book from the table
            let bookId = req.params.id;
            let queryText = `DELETE FROM "book" where "id" = $1`;
            pool.query(queryText,[bookId]).then( (response) => {
                console.log('this is the response from sql: ', response);
                res.sendStatus(201);
            }).catch( (error) => {
              console.log('error on router.delete', error);
            });
          });//end router.get
    








module.exports = router; 