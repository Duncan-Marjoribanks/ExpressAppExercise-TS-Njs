import express, {Request, Response, NextFunction} from 'express'

const app = express();

app.use(express.json())

//5th pass abstraction of route to function and add ordered parameter handling
function getBook( req: Request, res: Response, next: NextFunction ){
  console.log("req.params")
  next();
};

function getBookTwo( req: Request, res: Response, next: NextFunction){
  console.log("second parameter handler");
  return res.send(req.params);
}
app.get('/api/books/:bookId/:authorId', getBook, getBookTwo)

//4th pass route parameters
// app.get('/api/books/:bookId/:authorId', (req: Request, res: Response) =>{
//   console.log(req.params);
//   return res.send(req.params);
// });

//3rd pass routes (string patterns)
// app.get('/health', (req: Request, res: Response) => res.sendStatus(200))
// app.get('/abc', (req: Request, res: Response) => res.send("abc"))
// app.get('/ab*cd', (req: Request, res: Response) => res.send("ab*cd"))
// app.get(/xyz/, (req: Request, res: Response) => res.send("xyz"))

//2nd pass routes
// app
// .route('/')
// .get( (req: Request, res: Response) =>{
//   return res.send("You made a GET request");
// })
// .post( (req: Request, res: Response) =>{
//   return res.send("You made a POST request");
// })
// .put( (req: Request, res: Response) =>{
//   return res.send("You made a PUT request");
// })
// .delete( (req: Request, res: Response) =>{
//   return res.send("You made a DELETE request");
// })
// .all( (req: Request, res: Response) =>{
//   return res.send("You made an X request");
// });

//1st pass routes
// app.get('/', (req: Request, res: Response) =>{
//   return res.json({
//     success: true,
//     name: "DuncansExpressApp"
//   });
// });
//
// app.post('/api/data', (req: Request, res: Response) =>{
//   console.log(req.body);
//
//   return res.sendStatus(200);
// });
//
// app.all('/api/all', (req: Request, res: Response) =>{
//
//   return res.sendStatus(200);
// });

app.listen(3000, ()=>{
  console.log("appliaction listening at http://localhost:3000")
});
