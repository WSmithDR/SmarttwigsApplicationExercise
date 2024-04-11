// index.ts
import app from './app';
import connectToDB from './config/connectDB';
import env from './config/env'; // Import the config module


const port = env.port;
const mongoDB = env.mongoDB

connectToDB(mongoDB)



app.listen(port,
  ()=>console.log(`Server raised on port: http://localhost:${port}`)
  )


