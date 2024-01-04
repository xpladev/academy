import gameRouter from './routes/server/server';
import gameClient from './routes/client/client';
import wallet from './routes/wallet/wallet';
import path from 'path';
import express from 'express';
import session, { Cookie } from "express-session";

const cors = require('cors');
const cookieParser = require('cookie-parser')

class App {
    public application: express.Application;

    constructor() {
        this.application = express();
    }
};



const app = new App().application;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
    origin: true,
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));

app.use(cookieParser())
app.use(session({   
    secret: "xplaSecretKey1",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));

app.use('/', gameRouter);
app.use('/client/', gameClient)
app.use('/wallet/', wallet)

const { swaggerUi, specs } = require("./swagger/swagger")
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.argv[2];

 app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
