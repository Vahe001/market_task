import express from 'express';
import bodyParser from 'body-parser'
import initializeRoutes from './routes/index';
import dotenv from 'dotenv';
import initializeDb from './db'
import socket from './socket'
import cors from 'cors'

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({
    extended: true,
}));

(async () => {
    await initializeDb();
    await initializeRoutes(app);
    var http = require( "http" ).createServer( app );

    await socket(http);
    // let users = await global.users.find({});
    // console.log('users - ', users)
    http.listen(process.env.PORT)

})();

