import {Express, Request, Response, NextFunction} from 'express'


function routes( app: Express ){

  app.get('/error', async (req, res) =>{
    try{
        await throwsError();
        res.sendStatus(200);
    }
    catch(e){
        res.status(400).send('Something bad happened!');
    }
  });

  app.get(
    '/api/books/:bookId/:authorId', getBookHandler
  );
}

export default routes();
