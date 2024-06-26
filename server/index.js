import "dotenv/config";
import express from "express";
import models from "./models/models.js";
import sequelize from "./db.js";
import cors from 'cors'
import router from './routes/index.js'
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from 'express-fileupload';
import path from 'path'
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// error check
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
