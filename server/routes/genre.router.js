const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //gets all the genres in genre table and sends back
    let queryText = `SELECT genre.name, genre.id, COUNT (book.genre_id) FROM genre LEFT JOIN book ON book.genre_id = genre.id GROUP BY genre.name, genre.id;`;
    pool.query(queryText).then( (result) => {
      const responseArray = result.rows;
      res.send(result.rows);
    }).catch( (error) => {
      console.log('error on router.get', error);
    });
  });//end router.get

  router.post('/', (req, res) => {
    console.log('POST /genre', req.body);
    const genre = req.body;
    const queryText = `INSERT INTO "genre" ("name") VALUES ($1)`;
    pool.query(queryText, [genre.name])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making book insert query', error);
            res.sendStatus(500);
        });
    });//end router.post

  router.delete('/:id', (req, res) => {
    //deletes a genre from the table
    let genreId = req.params.id;
    let queryText = `DELETE FROM "genre" where "id" = $1`;
    pool.query(queryText,[genreId]).then( (response) => {
        console.log('this is the response from sql: ', response);
        res.sendStatus(201);
    }).catch( (error) => {
      console.log('error on router.delete', error);
    });
  });//end router.get







module.exports = router; 