import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import router from './src/router';

dotenv.config();
const { PORT, MONGODB_URI } = process.env;
const app: Application = express();
const mongoConnectOptions = { useNewUrlParser: true } as ConnectOptions;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, mongoConnectOptions);
    console.log('💾 MongoDB has been connected');

    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server has been started on port: ${PORT}...`)
    );
  } catch (error) {
    console.log(`❌ Error: \n ${error}`);
  }
})();
