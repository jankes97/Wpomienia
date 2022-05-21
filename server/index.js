import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

//rozmiar przesyłanych plików
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

//link do łączenia z mondodb
const CONNECTION_URL = 'mongodb+srv://webmaster:webmaseter!23@cluster0.xmmsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//na jakim porcie ma działać
const PORT = process.env.PORT || 5000;

//komunikat przy łączeniu
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Serwer uruchomiony: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} Nie działa!`));

mongoose.set('useFindAndModify', false);