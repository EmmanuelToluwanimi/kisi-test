
import express, { Express } from 'express';
import { PORT } from './utils/constants';
import routes from './route';
import cors from 'cors';
import path from "path";


const app: Express = express();
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'images')));

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  routes(app);
});