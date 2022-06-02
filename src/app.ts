import express, {Request, Response} from 'express'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app
.route('/')
.get( (req: Request, res: Response) =>{
  return res.send("You made a GET request");
})
.post( (req: Request, res: Response) =>{
  return res.send("You made a POST request");
})
.put( (req: Request, res: Response) =>{
  return res.send("You made a PUT request");
})
.delete( (req: Request, res: Response) =>{
  return res.send("You made a DELETE request");
})
.all( (req: Request, res: Response) =>{
  return res.send("You made an X request");
});


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
