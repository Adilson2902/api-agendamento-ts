import * as express from 'express';
import * as  cors from 'cors'
import routes from './routes';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use(routes);


app.listen(PORT, () =>{
    console.log(`o servidor está rodando na porta ${PORT}`)
})