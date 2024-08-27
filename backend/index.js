import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import db from './config/Database.js';
import User from './models/UserModel.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

(async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');

        // Sinkronisasi model dengan database
        await User.sync(); // Ini akan membuat tabel jika belum ada

        app.listen(5000, () => console.log('Server up and running on http://localhost:5000'));
    } catch (error) {
        console.log('Database connection error:', error);
    }
})();
